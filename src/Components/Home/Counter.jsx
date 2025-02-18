import { useState, useEffect } from "react";

export default function Counter({ n=n }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (n <= 0) return;
    const duration = 2000; // 2 seconds
    const intervalTime = duration / n;
    let current = 0;
    
    const interval = setInterval(() => {
      current += 1;
      setCount(current);
      if (current >= n) clearInterval(interval);
    }, intervalTime);

    return () => clearInterval(interval);
  }, [n]);

  return (
    <div>
      <div className="text-8xl font-bold text-blue-600">{count}</div>
    </div>
  );
}
