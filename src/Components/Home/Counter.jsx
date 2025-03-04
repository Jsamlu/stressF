import React, { useState, useEffect, useRef } from "react";

const Counter = ({ n=100 }) => {
  const [count, setCount] = useState(0);
  const counterRef = useRef(null);
  const [startCounting, setStartCounting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStartCounting(true);
        }
      },
      { threshold: 0.5 }
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (startCounting && count < n) {
      const interval = setInterval(() => {
        setCount((prev) => (prev < n ? prev + 1 : n));
      }, 120);

      return () => clearInterval(interval);
    }
  }, [startCounting, count, n]);

  return (
    <div
      ref={counterRef}
      className="text-5xl font-extrabold text-blue-500 bg-gray-100 p-6 rounded-lg shadow-lg text-center"
    >
      {count}
    </div>
  );
};

export default Counter;
