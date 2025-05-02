
import { useEffect, useRef } from 'react';

interface AnimateOptions {
  threshold?: number;
  rootMargin?: string;
  animationClass?: string;
}

export const useAnimateOnScroll = ({
  threshold = 0.1,
  rootMargin = '0px',
  animationClass = 'animated'
}: AnimateOptions = {}) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Add a small delay to make the animation more noticeable
            setTimeout(() => {
              entry.target.classList.add(animationClass);
            }, 100);
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold,
        rootMargin,
      }
    );

    const currentRef = ref.current;

    if (currentRef) {
      // Force any existing animation class to be removed first
      currentRef.classList.remove(animationClass);
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [threshold, rootMargin, animationClass]);

  return ref;
};
