import React, { useState, useEffect } from "react";
//import Confetti from "react-confetti"; // Import Confetti library

const PopTheStressBubble = () => {
  const [bubbles, setBubbles] = useState([]);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(30); // Timer starts at 30 seconds
  const [isGameOver, setIsGameOver] = useState(false);
  const [setWindowWidth] = useState(window.innerWidth);
  const [setWindowHeight] = useState(window.innerHeight);

  const rainbowColors = [
    "red",
    "orange",
    "yellow",
    "green",
    "blue",
    "indigo",
    "violet",
  ];

  // Timer countdown
  useEffect(() => {
    if (timeLeft > 0) {
      const timer = setTimeout(() => setTimeLeft((prev) => prev - 1), 1000);
      return () => clearTimeout(timer);
    } else {
      setIsGameOver(true); // End the game when timer reaches 0
    }
  }, [timeLeft]);

  // Update window dimensions for confetti
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      setWindowHeight(window.innerHeight);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Generate random bubbles
  useEffect(() => {
    if (isGameOver) return;

    const interval = setInterval(() => {
      setBubbles((prev) => [
        ...prev,
        {
          id: Math.random(),
          x: Math.random() * 90, // Random horizontal position
          y: Math.random() * 350, // Random vertical position
          size: 30, // Initial size
          maxSize: Math.random() * 40 + 60, // Random max size (60px - 100px)
          color: rainbowColors[Math.floor(Math.random() * rainbowColors.length)], // Random rainbow color
        },
      ]);
    }, 800);

    return () => clearInterval(interval);
  }, [isGameOver]);

  // Update bubbles: grow size
  useEffect(() => {
    if (isGameOver) return;

    const interval = setInterval(() => {
      setBubbles((prev) =>
        prev
          .map((bubble) => {
            if (bubble.size >= bubble.maxSize) return null; // Remove bubble if it exceeds max size
            return { ...bubble, size: bubble.size + 2 }; // Gradually increase size
          })
          .filter(Boolean) // Remove popped or exploded bubbles
      );
    }, 100);

    return () => clearInterval(interval);
  }, [isGameOver]);

  const popBubble = (id) => {
    if (!isGameOver) {
      setScore((prev) => prev + 1);
      setBubbles((prev) => prev.filter((bubble) => bubble.id !== id));
    }
  };

  return (
    <div
      style={{
        position: "relative",
        height: "400px",
        overflow: "hidden",
        background: "linear-gradient(to top, #e0f7fa, #b3e5fc)", // Light gradient background
        textAlign: "center",
        color: "black",
        animation: "waveAnimation 5s infinite linear", // Apply wavy animation
      }}
    >
      

      {/* Game Over Screen */}
      {isGameOver ? (
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            textAlign: "center",
          }}
        >
          <h2>Game Over!</h2>
          <p>Your Final Score: {score}</p>
          <button
            onClick={() => {
              setTimeLeft(30);
              setScore(0);
              setIsGameOver(false);
              setBubbles([]);
            }}
            style={{
              padding: "10px 20px",
              fontSize: "16px",
              backgroundColor: "#28a745",
              color: "white",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            Play Again
          </button>
        </div>
      ) : (
        <>
          <h3 style={{ margin: "10px 0" }}>Time Left: {timeLeft}s</h3>
          <h3 style={{ margin: "10px 0" }}>Score: {score}</h3>
          {bubbles.map((bubble) => (
            <div
              key={bubble.id}
              onClick={() => popBubble(bubble.id)}
              style={{
                width: `${bubble.size}px`,
                height: `${bubble.size}px`,
                backgroundColor: bubble.color,
                borderRadius: "50%",
                position: "absolute",
                top: `${bubble.y}px`,
                left: `${bubble.x}%`,
                cursor: "pointer",
                transition: "transform 0.2s ease-in-out",
              }}
              onMouseOver={(e) => (e.target.style.transform = "scale(1.2)")}
              onMouseOut={(e) => (e.target.style.transform = "scale(1)")}
            ></div>
          ))}
        </>
      )}
    </div>
  );
};

export default PopTheStressBubble;

