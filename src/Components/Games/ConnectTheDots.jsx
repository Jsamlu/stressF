import React, { useState, useEffect } from 'react';

const ConnectTheDots = () => {
  // Define multiple shapes (each with different numbers of dots)
  const shapes = [
    [
      { x: 100, y: 100 },  // Dot 1
      { x: 200, y: 50 },   // Dot 2
      { x: 300, y: 100 },  // Dot 3
      { x: 250, y: 200 },  // Dot 4
      { x: 150, y: 200 },  // Dot 5
    ],
    [
      { x: 50, y: 50 },    // Dot 1
      { x: 150, y: 100 },  // Dot 2
      { x: 250, y: 50 },   // Dot 3
      { x: 200, y: 200 },  // Dot 4
      { x: 100, y: 250 },  // Dot 5
      { x: 300, y: 250 },  // Dot 6
      { x: 350, y: 100 },  // Dot 7
    ],
    [
      { x: 100, y: 50 },   // Dot 1
      { x: 200, y: 100 },  // Dot 2
      { x: 300, y: 50 },   // Dot 3
      { x: 350, y: 150 },  // Dot 4
      { x: 250, y: 200 },  // Dot 5
      { x: 150, y: 150 },  // Dot 6
      { x: 200, y: 250 },  // Dot 7
      { x: 300, y: 250 },  // Dot 8
    ]
  ];

  const [currentShapeIndex, setCurrentShapeIndex] = useState(0);
  const [clickedDots, setClickedDots] = useState([]);
  const [gameComplete, setGameComplete] = useState(false);

  // Function to handle dot click
  const handleDotClick = (dotIndex) => {
    // Allow clicking dots only in the correct order
    if (clickedDots.length === dotIndex) {
      setClickedDots([...clickedDots, dotIndex]);
    }
  };

  // Function to draw lines between dots
  const drawLines = () => {
    const lines = [];
    for (let i = 1; i < clickedDots.length; i++) {
      const startDot = currentShape[clickedDots[i - 1]];
      const endDot = currentShape[clickedDots[i]];
      lines.push(
        <line
          key={`line-${i}`}
          x1={startDot.x}
          y1={startDot.y}
          x2={endDot.x}
          y2={endDot.y}
          stroke="black"
          strokeWidth="2"
        />
      );
    }
    return lines;
  };

  // Get current shape's dots
  const currentShape = shapes[currentShapeIndex];

  // Check if the game is complete
  useEffect(() => {
    if (clickedDots.length === currentShape.length) {
      setGameComplete(true);
    }
  }, [clickedDots, currentShape]);

  // Reset the game or move to the next shape
  const resetGame = () => {
    if (gameComplete) {
      if (currentShapeIndex < shapes.length - 1) {
        setCurrentShapeIndex(currentShapeIndex + 1);
      } else {
        setCurrentShapeIndex(0); // Restart from the first shape if all are completed
      }
    }
    setClickedDots([]);
    setGameComplete(false);
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <h2>Connect the Dots</h2>
      <p>Click the dots in order!</p>
      <svg width="400" height="400" style={{ border: '1px solid #000', margin: '0 auto' }}>
        {/* Draw lines between clicked dots */}
        {drawLines()}

        {/* Draw the dots */}
        {currentShape.map((dot, index) => (
          <circle
            key={index}
            cx={dot.x}
            cy={dot.y}
            r={10}
            fill={clickedDots.includes(index) ? 'blue' : 'red'}
            onClick={() => handleDotClick(index)}
            style={{ cursor: 'pointer' }}
          />
        ))}
      </svg>

      {gameComplete && (
        <div>
          <h3>Congratulations! You completed the shape.</h3>
          <button onClick={resetGame} style={{ padding: '10px 20px', marginTop: '20px' }}>
            Next Shape
          </button>
        </div>
      )}
    </div>
  );
};

export default ConnectTheDots;
