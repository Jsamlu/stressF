import React, { useEffect } from "react";
import "./ConnectTheDots.css";

const StarryBackground = () => {
  useEffect(() => {
    const starryBackground = document.querySelector(".starry-background");

    for (let i = 0; i < 200; i++) {
      const star = document.createElement("div");
      star.className = "star";
      star.style.top = `${Math.random() * 100}%`;
      star.style.left = `${Math.random() * 100}%`;
      starryBackground.appendChild(star);
    }
  }, []);

  return (
    <div className="starry-background">
      <div className="galaxy"></div>
      <div className="shooting-star"></div>
    </div>
  );
};

export default StarryBackground;
