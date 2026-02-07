import React, { useEffect, useRef, useState } from 'react';

interface ScrollRevealProps {
  children: React.ReactNode;
  animation?: 'fade-up' | 'fade-down' | 'fade-left' | 'fade-right' | 'zoom-in';
  duration?: string;
  delay?: string;
  className?: string;
  threshold?: number;
  fullWidth?: boolean;
}

const ScrollReveal: React.FC<ScrollRevealProps> = ({ 
  children, 
  animation = 'fade-up', 
  duration = '0.8s', 
  delay = '0s', 
  className = '',
  threshold = 0.1,
  fullWidth = false
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [threshold]);

  const getTransform = () => {
    if (isVisible) return 'translate(0, 0) scale(1)';
    
    switch (animation) {
      case 'fade-up': return 'translate(0, 50px)';
      case 'fade-down': return 'translate(0, -50px)';
      case 'fade-left': return 'translate(-50px, 0)';
      case 'fade-right': return 'translate(50px, 0)';
      case 'zoom-in': return 'scale(0.95)';
      default: return 'translate(0, 50px)';
    }
  };

  return (
    <div
      ref={ref}
      className={className}
      style={{
        width: fullWidth ? '100%' : undefined,
        transition: `opacity ${duration} ease-out, transform ${duration} ease-out`,
        transitionDelay: delay,
        opacity: isVisible ? 1 : 0,
        transform: getTransform(),
        willChange: 'opacity, transform'
      }}
    >
      {children}
    </div>
  );
};

export default ScrollReveal;