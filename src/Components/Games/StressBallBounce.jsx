import React, { useState, useEffect } from "react";

const StressBallBounce = () => {
  const [basketPosition, setBasketPosition] = useState(200);
  const [fallingBlocks, setFallingBlocks] = useState([]);
  const [score, setScore] = useState(0);
  const [gameTime, setGameTime] = useState(60); // 60 seconds for the game time
  const [isGameOver, setIsGameOver] = useState(false);

  // Reset the game to initial state
  const resetGame = () => {
    setBasketPosition(200);
    setFallingBlocks([]);
    setScore(0);
    setGameTime(60);
    setIsGameOver(false);
  };

  useEffect(() => {
    // Timer interval to decrease game time
    if (gameTime <= 0) {
      setIsGameOver(true);
      return;
    }

    const timerInterval = setInterval(() => {
      setGameTime((prevTime) => prevTime - 1);
    }, 1000); // Update every second

    return () => clearInterval(timerInterval);
  }, [gameTime]);

  useEffect(() => {
    if (isGameOver) return;

    // Interval for generating falling blocks
    const blockInterval = setInterval(() => {
      const newBlock = {
        id: Math.random(),
        x: Math.random() * 400, // Random horizontal position
        y: 0, // Starting from the top of the screen
        color: getRandomColor(),
      };
      setFallingBlocks((prev) => [...prev, newBlock]);
    }, 1000); // Create a new block every 1 second

    // Block falling logic with slower falling speed
    const fallInterval = setInterval(() => {
      setFallingBlocks((prev) => {
        return prev
          .map((block) => ({ ...block, y: block.y + 3 })) // Slow down the falling speed (changed from 5 to 3)
          .filter((block) => block.y < 500); // Remove blocks that fall off the screen
      });
    }, 16); // ~60 FPS for falling speed

    return () => {
      clearInterval(blockInterval);
      clearInterval(fallInterval);
    };
  }, [isGameOver]);

  const getRandomColor = () => {
    const colors = ["red", "blue", "green", "yellow", "purple"];
    return colors[Math.floor(Math.random() * colors.length)];
  };

  // Handle basket movement
  const handleKeyPress = (e) => {
    if (e.key === "ArrowLeft" && basketPosition > 0) {
      setBasketPosition(basketPosition - 20); // Move left
    }
    if (e.key === "ArrowRight" && basketPosition < 400) {
      setBasketPosition(basketPosition + 20); // Move right
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyPress);
    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, [basketPosition]);

  // Check if a block is caught
  useEffect(() => {
    const caughtBlocks = fallingBlocks.filter(
      (block) =>
        block.y >= 450 && // Block reaches the bottom area
        block.x >= basketPosition - 50 && // Block is within basket's range (left side)
        block.x <= basketPosition + 50 // Block is within basket's range (right side)
    );

    if (caughtBlocks.length > 0) {
      setScore((prev) => prev + caughtBlocks.length); // Increase score
      setFallingBlocks((prev) =>
        prev.filter((block) => !caughtBlocks.includes(block)) // Remove caught blocks
      );
    }
  }, [fallingBlocks, basketPosition]);

  return (
    <div
      style={{
        position: "relative",
        height: "500px",
        width: "500px",
        border: "2px solid black",
        background: "linear-gradient(to top, #3a8d99, #1e4b56)",
        overflow: "hidden",
        textAlign: "center",
        color: "white",
      }}
    >
      {isGameOver && (
        <div style={{ position: "absolute", top: "200px", width: "100%" }}>
          <h2>Game Over!</h2>
          <p>Final Score: {score}</p>
          <button onClick={resetGame} style={{ padding: "10px 20px", fontSize: "16px" }}>
            Play Again
          </button>
        </div>
      )}

      {/* Render Falling Blocks */}
      {fallingBlocks.map((block) => (
        <div
          key={block.id}
          style={{
            position: "absolute",
            top: `${block.y}px`,
            left: `${block.x}px`,
            width: "30px",
            height: "30px",
            backgroundColor: block.color,
            borderRadius: "5px",
          }}
        ></div>
      ))}

      {/* Basket */}
      <div
        style={{
          position: "absolute",
          left: `${basketPosition}px`,
          bottom: "0",
          width: "100px",
          height: "20px",
          backgroundColor: "orange",
          borderRadius: "5px",
        }}
      ></div>

      {/* Game Info */}
      <div style={{ position: "absolute", top: "10px", width: "100%" }}>
        <h3>Score: {score}</h3>
        <p>Time: {gameTime}s</p>
      </div>
    </div>
  );
};

export default StressBallBounce;
