import { useEffect, useRef } from 'react';

/**
 * Wraps children in a div with scroll-reveal animation.
 * @param {string}  direction  'up' | 'left' | 'right'
 * @param {number}  delay      Delay in ms before the class is added.
 * @param {string}  className  Extra class names.
 */
export default function Reveal({ children, direction = 'up', delay = 0, className = '', as: Tag = 'div' }) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => el.classList.add('in-view'), delay);
          observer.unobserve(el);
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -60px 0px' }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [delay]);

  return (
    <Tag ref={ref} className={`reveal-${direction} ${className}`}>
      {children}
    </Tag>
  );
}
