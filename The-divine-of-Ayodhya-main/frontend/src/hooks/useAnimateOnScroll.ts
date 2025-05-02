import { useEffect } from 'react';

export const useAnimateOnScroll = () => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animated');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.section-animate').forEach((section) => {
      observer.observe(section);
    });

    return () => {
      document.querySelectorAll('.section-animate').forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, []);
};
