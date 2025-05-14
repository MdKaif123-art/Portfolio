import { useEffect, useRef } from 'react';

interface ScrollObserverProps {
  target: React.RefObject<HTMLElement>;
  onIntersect: () => void;
  threshold?: number;
  rootMargin?: string;
}

export function useScrollObserver({
  target,
  onIntersect,
  threshold = 0.2,
  rootMargin = '0px',
}: ScrollObserverProps) {
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    if (observerRef.current) {
      observerRef.current.disconnect();
    }

    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            onIntersect();
          }
        });
      },
      { threshold, rootMargin }
    );

    const currentTarget = target.current;
    if (currentTarget) {
      observerRef.current.observe(currentTarget);
    }

    return () => {
      if (observerRef.current && currentTarget) {
        observerRef.current.unobserve(currentTarget);
        observerRef.current.disconnect();
      }
    };
  }, [target, onIntersect, threshold, rootMargin]);
}

export default useScrollObserver;