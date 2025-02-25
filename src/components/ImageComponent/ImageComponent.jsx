import { useState, useRef, useCallback, useEffect } from 'react';
import PropTypes from 'prop-types';
import './ImageComponent.css';

const ImageComponent = ({ headings, imageUrl }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [scale, setScale] = useState(1);
  const [headingStyle, setHeadingStyle] = useState({
    opacity: 1,
    transform: 'translateY(0)'
  });
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting); // Set visibility based on intersection
      },
      { threshold: 0.1 } // Trigger when 10% of the component is visible
    );
  
    const currentRef = parallaxRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }
  
    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);
  const [isVisible, setIsVisible] = useState(false); // Track visibility of the component

  const parallaxRef = useRef(null);
  const stickyContainerRef = useRef(null);

  // Update heading text with transition
  const updateHeading = useCallback(() => {
    setHeadingStyle({ opacity: 0, transform: 'translateY(20px)' });
    setTimeout(() => {
      setHeadingStyle({ opacity: 1, transform: 'translateY(0)' });
    }, 500);
  }, []);

  // Scroll handler for parallax effect and section tracking
  const handleScroll = useCallback(() => {
    if (!parallaxRef.current) return;
    
    const { top, height } = parallaxRef.current.getBoundingClientRect();
    const scrollProgress = -top / (height - window.innerHeight);
    const newIndex = Math.min(
      Math.floor(scrollProgress * headings.length),
      headings.length - 1
    );

    // Update current section index
    if (newIndex !== currentIndex && !isTransitioning) {
      setIsTransitioning(true);
      setCurrentIndex(newIndex);
      updateHeading(newIndex);
      setTimeout(() => setIsTransitioning(false), 500);
    }

    // Update background scale
    setScale(1 + scrollProgress * 0.1);
  }, [currentIndex, headings.length, isTransitioning, updateHeading]);

  // Intersection Observer to detect when the component is in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting); // Set visibility based on intersection
      },
      { threshold: 0.1 } // Trigger when 10% of the component is visible
    );

    const currentRef = parallaxRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  // Scroll listener setup
  useEffect(() => {
    const onScroll = () => requestAnimationFrame(handleScroll);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [handleScroll]);

  return (
    <section 
      className="parallax-section" 
      ref={parallaxRef}
      aria-label="Parallax scrolling section"
    >
      {/* Scroll indicator dots (conditionally rendered) */}
      {isVisible && (
        <nav className="scroll-indicator" aria-label="Page navigation">
          <ul>
            {headings.map((_, index) => (
              <li key={index}>
                <div
                  className="dot"
                  aria-current={index === currentIndex ? 'step' : undefined}
                />
              </li>
            ))}
          </ul>
        </nav>
      )}

      {/* Sticky container with parallax elements */}
      <div className="sticky-container" ref={stickyContainerRef}>
        <div 
          className="background-image"
          style={{
            backgroundImage: `url(${imageUrl})`,
            transform: `scale(${scale})`
          }}
        >
          <div className="overlay" />
        </div>
        
        <div className="content">
          <h2 
            className="heading" 
            style={headingStyle}
            aria-live="polite"
          >
            {headings[currentIndex]}
          </h2>
        </div>
      </div>
    </section>
  );
};

ImageComponent.propTypes = {
  headings: PropTypes.arrayOf(PropTypes.string).isRequired,
  imageUrl: PropTypes.string.isRequired
};

export default ImageComponent;