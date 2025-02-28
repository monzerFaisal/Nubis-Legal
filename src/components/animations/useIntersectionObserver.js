import { useEffect, useRef } from 'react';

export const useAnimation = (animationType, options = {}) => {
  const elementRef = useRef(null);
  
  useEffect(() => {
    // Store the current ref value in a local variable
    const node = elementRef.current;
    let observer;

    if (node) {
      observer = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) {
          node.classList.add(`active-${animationType}`);
        } else {
          node.classList.remove(`active-${animationType}`);
        }
      }, {
        threshold: 0.1,
        rootMargin: '0px',
        ...options
      });

      observer.observe(node);
    }

    return () => {
      if (node && observer) {
        observer.unobserve(node);
      }
    };
  }, [animationType, options]);

  return elementRef;
};