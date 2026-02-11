import { useMemo } from "react";

const HEART_COUNT = 12;

export const FloatingHearts = () => {
  const hearts = useMemo(() => {
    return Array.from({ length: HEART_COUNT }, (_, i) => {
      const size = Math.random() * 18 + 10;
      const left = Math.random() * 100;
      const duration = Math.random() * 12 + 8;
      const delay = Math.random() * 10;
      const opacity = Math.random() * 0.12 + 0.05;

      return (
        <span
          key={i}
          className="floating-heart"
          style={{
            left: `${left}%`,
            fontSize: `${size}px`,
            animationDuration: `${duration}s`,
            animationDelay: `${delay}s`,
            opacity: opacity,
          }}
          aria-hidden="true"
        >
          &#10084;
        </span>
      );
    });
  }, []);

  return (
    <div className="floating-hearts-container" aria-hidden="true">
      {hearts}
    </div>
  );
};

export default FloatingHearts;
