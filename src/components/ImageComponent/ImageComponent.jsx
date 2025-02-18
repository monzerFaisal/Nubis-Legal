import { useState, useRef, useCallback, useEffect } from 'react';
import PropTypes from 'prop-types';
import './ImageComponent.css';
import imageSrc from '../img/loading.png'; // Directly import the image

const ImageComponent = ({ altText, overlayTitle, overlayDescription }) => {
  const [scale, setScale] = useState(0.7);
  const [imageLoaded, setImageLoaded] = useState(false);
  const imageRef = useRef(null);
  const animationFrameRef = useRef();
  const lastScrollY = useRef(window.scrollY);
  const reachedFullSize = useRef(false);

  const handleImageLoad = useCallback(() => {
    setImageLoaded(true);
  }, []);

  const calculateScale = useCallback(() => {
    if (!imageRef.current || reachedFullSize.current) return;

    const { top, height } = imageRef.current.getBoundingClientRect();
    const triggerThreshold = window.innerHeight * (window.innerWidth <= 768 ? 0.1 : 0.2);

    if (top <= triggerThreshold) {
      setScale(1);
      reachedFullSize.current = true;
      return;
    }

    const progress = Math.min(
      (window.innerHeight / 2 - top) / (height * 0.25),
      1
    );
    setScale(0.7 + progress * 0.3);
  }, []);

  const handleScroll = useCallback(() => {
    if (lastScrollY.current < window.scrollY) {
      animationFrameRef.current = requestAnimationFrame(calculateScale);
    }
    lastScrollY.current = window.scrollY;
  }, [calculateScale]);

  useEffect(() => {
    const scrollListener = () => {
      animationFrameRef.current = requestAnimationFrame(handleScroll);
    };

    window.addEventListener('scroll', scrollListener);
    return () => {
      window.removeEventListener('scroll', scrollListener);
      cancelAnimationFrame(animationFrameRef.current);
    };
  }, [handleScroll]);

  return (
    <section 
      className="image-parallax-container"
      aria-label="Parallax image section"
    >
      <img
        ref={imageRef}
        className={`image-parallax ${imageLoaded ? 'loaded' : ''}`}
        src={imageSrc} // Use directly imported image
        alt={altText}
        loading="lazy"
        decoding="async"
        onLoad={handleImageLoad}
        style={{ transform: `scale(${scale})` }}
      />

      <div className="text-overlay" role="region" aria-label="Content overlay">
        <h1 className="overlay-title">{overlayTitle}</h1>
        <p className="overlay-description">{overlayDescription}</p>
      </div>
    </section>
  );
};

ImageComponent.propTypes = {
  altText: PropTypes.string.isRequired, // Removed imageSrc from propTypes
  overlayTitle: PropTypes.string.isRequired,
  overlayDescription: PropTypes.string.isRequired,
};

export default ImageComponent;