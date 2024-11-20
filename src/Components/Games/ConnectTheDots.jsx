import React, { useState, useEffect } from "react";
import StarryBackground from "./StarryBackground";
import "./ConnectTheDots.css";

const ConnectTheDots = () => {
  const constellations = [
    {
      name: "Orion",
      description: "Orion, 'The Hunter', is one of the most recognizable constellations in the night sky.",
      dots: [
        { x: 100, y: 100 },
        { x: 150, y: 200 },
        { x: 200, y: 100 },
        { x: 300, y: 150 },
        { x: 250, y: 250 },
      ],
    },
    {
      name: "Big Dipper",
      description: "The Big Dipper is part of the Ursa Major constellation, known for its distinct ladle shape.",
      dots: [
        { x: 50, y: 150 },
        { x: 100, y: 100 },
        { x: 150, y: 50 },
        { x: 250, y: 100 },
        { x: 300, y: 200 },
        { x: 200, y: 250 },
        { x: 100, y: 250 },
      ],
    },
    {
      name: "Cassiopeia",
      description: "Cassiopeia is a distinctive W-shaped constellation visible in the northern sky.",
      dots: [
        { x: 100, y: 50 },
        { x: 150, y: 100 },
        { x: 200, y: 50 },
        { x: 300, y: 100 },
        { x: 250, y: 200 },
        { x: 150, y: 200 },
      ],
    },
  ];

  const [currentConstellationIndex, setCurrentConstellationIndex] = useState(0);
  const [clickedDots, setClickedDots] = useState([]);
  const [gameComplete, setGameComplete] = useState(false);

  const handleDotClick = (dotIndex) => {
    if (clickedDots.length === dotIndex) {
      setClickedDots([...clickedDots, dotIndex]);
    }
  };

  const drawLines = () => {
    const lines = [];
    for (let i = 1; i < clickedDots.length; i++) {
      const startDot = currentConstellation.dots[clickedDots[i - 1]];
      const endDot = currentConstellation.dots[clickedDots[i]];
      lines.push(
        <line
          key={`line-${i}`}
          x1={startDot.x}
          y1={startDot.y}
          x2={endDot.x}
          y2={endDot.y}
          stroke="white"
          strokeWidth="2"
          className="glowing-line"
        />
      );
    }
    return lines;
  };

  const currentConstellation = constellations[currentConstellationIndex];

  useEffect(() => {
    if (clickedDots.length === currentConstellation.dots.length) {
      setGameComplete(true);
    }
  }, [clickedDots, currentConstellation]);

  const resetGame = () => {
    if (gameComplete) {
      if (currentConstellationIndex < constellations.length - 1) {
        setCurrentConstellationIndex(currentConstellationIndex + 1);
      } else {
        setCurrentConstellationIndex(0);
      }
    }
    setClickedDots([]);
    setGameComplete(false);
  };

  return (
    <div className="connect-the-dots">
      <StarryBackground />
      <div className="game-content">
        <h2>Connect the Dots: Constellations</h2>
        <p>Click the dots in order to form the constellation!</p>
        <svg
          width="400"
          height="400"
          className="night-sky"
        >
          {drawLines()}
          {currentConstellation.dots.map((dot, index) => (
            <circle
              key={index}
              cx={dot.x}
              cy={dot.y}
              r={10}
              fill={clickedDots.includes(index) ? "#FFD700" : "white"}
              onClick={() => handleDotClick(index)}
              style={{ cursor: "pointer" }}
            />
          ))}
        </svg>

        {gameComplete && (
          <div className="info sparkle">
            <h3>Congratulations! You completed {currentConstellation.name}!</h3>
            <p>{currentConstellation.description}</p>
            <button className="next-button" onClick={resetGame}>
              Next Constellation
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ConnectTheDots;
