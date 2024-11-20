import React, { useState, useEffect } from "react";

const CatchTheFallingStress = () => {
  const [objects, setObjects] = useState([]);
  const [basketPosition, setBasketPosition] = useState(250);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);

  useEffect(() => {
    if (gameOver) return;

    const interval = setInterval(() => {
      setObjects((prev) =>
        prev.map((object) => ({
          ...object,
          y: object.y + 5,
        }))
      );
    }, 50);

    return () => clearInterval(interval);
  }, [gameOver]);

  useEffect(() => {
    const newObjectInterval = setInterval(() => {
      if (gameOver) return;
      setObjects((prev) => [
        ...prev,
        {
          id: Math.random(),
          x: Math.random() * 480, // Random horizontal position
          y: 0, // Start at the top
          size: 30 + Math.random() * 20,
        },
      ]);
    }, 1500);

    return () => clearInterval(newObjectInterval);
  }, [gameOver]);

  useEffect(() => {
    objects.forEach((object) => {
      if (object.y > 400) {
        setGameOver(true);
      }
      if (
        object.y > 350 &&
        object.x >= basketPosition - 30 &&
        object.x <= basketPosition + 30
      ) {
        setScore(score + 1);
        setObjects((prev) => prev.filter((o) => o.id !== object.id));
      }
    });
  }, [score,objects, basketPosition]);

  return (
    <div style={{ position: "relative", height: "400px", overflow: "hidden" }}>
      <h3>Score: {score}</h3>
      {gameOver && <div>Game Over! Final Score: {score}</div>}
      <div
        style={{
          width: "60px",
          height: "20px",
          backgroundColor: "orange",
          position: "absolute",
          bottom: "0",
          left: `${basketPosition}px`,
          cursor: "pointer",
        }}
        onMouseMove={(e) => setBasketPosition(e.clientX - 30)}
      />
      {objects.map((object) => (
        <div
          key={object.id}
          style={{
            width: `${object.size}px`,
            height: `${object.size}px`,
            backgroundColor: "skyblue",
            position: "absolute",
            top: `${object.y}px`,
            left: `${object.x}px`,
            borderRadius: "50%",
            transition: "transform 0.1s",
          }}
        ></div>
      ))}
    </div>
  );
};

export default CatchTheFallingStress;
