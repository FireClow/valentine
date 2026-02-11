import { useMemo } from "react";

const SPARKLE_COUNT = 8;

export const FloatingSparkles = () => {
  const sparkles = useMemo(() => {
    return Array.from({ length: SPARKLE_COUNT }, (_, i) => {
      const size = Math.random() * 12 + 6;
      const top = Math.random() * 100;
      const left = Math.random() * 100;
      const duration = Math.random() * 3 + 2;
      const delay = Math.random() * 4;

      return (
        <span
          key={i}
          className="sparkle"
          style={{
            top: `${top}%`,
            left: `${left}%`,
            fontSize: `${size}px`,
            animation: `sparkleFloat ${duration}s ease-in-out ${delay}s infinite`,
          }}
          aria-hidden="true"
        >
          &#10022;
        </span>
      );
    });
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0" aria-hidden="true">
      {sparkles}
    </div>
  );
};

export default FloatingSparkles;
