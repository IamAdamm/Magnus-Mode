import { useEffect } from 'react';

const useIntersectionObserver = (selector, className, options = { threshold: 0.25 }) => {
  useEffect(() => {
    const elements = document.querySelectorAll(selector);

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          console.log('detected')
          entry.target.classList.add(className);
        }
      });
    }, options);

    elements.forEach(element => {
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      elements.forEach(element => {
        if (element) {
          observer.unobserve(element);
        }
      });
    };
  }, [selector, className, options]);
};

export default useIntersectionObserver;
