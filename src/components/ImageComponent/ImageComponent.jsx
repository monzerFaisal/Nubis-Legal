import { useState, useEffect, useRef } from 'react';
import './imageComponent.css';
import imageBg from '../img/loading.png';

const ImageComponent = () => {
  const [scale, setScale] = useState(0.7);  // Start from 70% size
  const [borderRadius, setBorderRadius] = useState(50);  // Start with 50px border-radius
  const [textPosition, setTextPosition] = useState(0);
  const imageRef = useRef(null);
  const lastScrollY = useRef(0);
  const reachedFullSize = useRef(false); // Track if image has reached full size

  useEffect(() => {
    const handleScroll = () => {
      if (!imageRef.current) return;

      const image = imageRef.current;
      const imageRect = image.getBoundingClientRect();
      const imageHeight = imageRect.height;
      const currentScrollY = window.scrollY;

      // Reset when scrolling back to top
      if (currentScrollY < lastScrollY.current) {
        reachedFullSize.current = false; // Allow effect again when scrolling back up
      }

      // Check if user is scrolling down
      if (currentScrollY > lastScrollY.current && !reachedFullSize.current) {
        const imageTop = imageRect.top;
        const upperQuarterY = -imageHeight * 0.25; // Upper quarter of the image

        // Stop scaling when the image top reaches the upper quarter of the image
        if (imageTop <= upperQuarterY) {
          reachedFullSize.current = true; // Stop scaling
          setScale(1); // Full size
          setBorderRadius(0); // No border-radius
        } else {
          // Calculate the scaling progress (scale from 0.7 to 1)
          const progress = Math.min((window.innerHeight / 2 - imageTop) / (imageHeight * 0.25), 1);
          const newScale = 0.7 + progress * 0.3; // Start at 0.7 and scale to 1
          setScale(newScale);

          // Adjust border radius as we scale
          const newBorderRadius = Math.max(50 - progress * 50, 0);
          setBorderRadius(newBorderRadius);
        }

        // Move text upwards based on scroll progress
        setTextPosition(-100 * (1 - Math.min((window.innerHeight / 2 - imageTop) / imageHeight, 1)));
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="video-background-container">
      <img
        ref={imageRef}
        className="video-background"
        src={imageBg}
        alt="Background"
        style={{
          transform: `translate(-50%, -50%) scale(${scale})`,
          borderRadius: `${borderRadius}px`,  // Set border radius dynamically
          transition: 'transform 0.3s ease-out, border-radius 0.3s ease-out',
        }}
      />
      <div
        className="text-overlay"
        style={{
          transform: `translate(-50%, ${textPosition}%)`,
        }}
      >
        <h1 className="overlay-title">Blend virtual objects with</h1>
        <p className="overlay-description">your physical space</p>
      </div>
    </div>
  );
};

export default ImageComponent;
