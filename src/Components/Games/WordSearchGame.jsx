import React, { useState, useEffect } from 'react';

// List of words to find in the word search
const wordList = ['REACT', 'JAVASCRIPT', 'HTML', 'CSS', 'NODE', 'FRONTEND', 'BACKEND'];

const generateGrid = (size, words) => {
  const grid = Array(size)
    .fill(null)
    .map(() => Array(size).fill(''));

  const wordPositions = {}; // Store positions of words in the grid

  const placeWord = (word) => {
    const wordLength = word.length;
    let placed = false;

    while (!placed) {
      const direction = Math.floor(Math.random() * 2);
      const startRow = Math.floor(Math.random() * size);
      const startCol = Math.floor(Math.random() * size);

      if (
        (direction === 0 && startCol + wordLength <= size) ||
        (direction === 1 && startRow + wordLength <= size)
      ) {
        let canPlace = true;
        for (let i = 0; i < wordLength; i++) {
          if (
            (direction === 0 && grid[startRow][startCol + i] !== '' && grid[startRow][startCol + i] !== word[i]) ||
            (direction === 1 && grid[startRow + i][startCol] !== '' && grid[startRow + i][startCol] !== word[i])
          ) {
            canPlace = false;
            break;
          }
        }
        if (canPlace) {
          wordPositions[word] = [];
          for (let i = 0; i < wordLength; i++) {
            if (direction === 0) {
              grid[startRow][startCol + i] = word[i];
              wordPositions[word].push({ row: startRow, col: startCol + i });
            } else {
              grid[startRow + i][startCol] = word[i];
              wordPositions[word].push({ row: startRow + i, col: startCol });
            }
          }
          placed = true;
        }
      }
    }
  };

  words.forEach(placeWord);

  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  for (let row = 0; row < size; row++) {
    for (let col = 0; col < size; col++) {
      if (grid[row][col] === '') {
        grid[row][col] = alphabet.charAt(Math.floor(Math.random() * alphabet.length));
      }
    }
  }

  return { grid, wordPositions };
};

const WordSearchGame = () => {
  const size = 10;
  const [gameState, setGameState] = useState(() => generateGrid(size, wordList));
  const [foundWords, setFoundWords] = useState([]);
  const [gameWon, setGameWon] = useState(false);
  const [selectedCells, setSelectedCells] = useState([]);

  const handleCellClick = (row, col) => {
    if (!gameWon) {
      const newSelectedCells = [...selectedCells, { row, col }];
      setSelectedCells(newSelectedCells);
      checkSelectedWord(newSelectedCells);
    }
  };

  const checkSelectedWord = (selectedCells) => {
    const selectedWord = selectedCells
      .map(cell => gameState.grid[cell.row][cell.col])
      .join('');

    if (wordList.includes(selectedWord) && !foundWords.includes(selectedWord)) {
      setFoundWords([...foundWords, selectedWord]);
      setSelectedCells([]);
      if (foundWords.length + 1 === wordList.length) {
        setGameWon(true);
      }
    }
  };

  const clearSelection = () => {
    setSelectedCells([]);
  };

  const resetGame = () => {
    setGameState(generateGrid(size, wordList));
    setFoundWords([]);
    setGameWon(false);
    setSelectedCells([]);
  };

  const renderGrid = () => {
    return gameState.grid.map((row, rowIndex) => (
      <div key={rowIndex} style={{ display: 'flex' }}>
        {row.map((cell, colIndex) => {
          let isPartOfFoundWord = false;
          foundWords.forEach(word => {
            if (gameState.wordPositions[word].some(pos => pos.row === rowIndex && pos.col === colIndex)) {
              isPartOfFoundWord = true;
            }
          });

          return (
            <div
              key={colIndex}
              onClick={() => handleCellClick(rowIndex, colIndex)}
              style={{
                width: 30,
                height: 30,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                border: '1px solid gray',
                backgroundColor: isPartOfFoundWord ? 'lightgreen' : selectedCells.some(c => c.row === rowIndex && c.col === colIndex)
                  ? 'lightblue'
                  : 'lightyellow',
                fontSize: '16px',
                cursor: 'pointer',
              }}
            >
              {cell}
            </div>
          );
        })}
      </div>
    ));
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <h2>Word Search Game</h2>
      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
        <div>{renderGrid()}</div>
        <div style={{ marginLeft: '20px' }}>
          <h4>Words to find:</h4>
          <ul style={{ textAlign: 'left' }}>
            {wordList.map((word) => (
              <li
                key={word}
                style={{
                  textDecoration: foundWords.includes(word) ? 'line-through' : 'none',
                }}
              >
                {word}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div>
        <button
          onClick={clearSelection}
          style={{
            padding: '10px 20px',
            marginRight: '10px',
            backgroundColor: '#ffcccb',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            fontWeight: 'bold',
          }}
        >
          Clear Selection
        </button>
        {gameWon && (
          <button
            onClick={resetGame}
            style={{
              padding: '10px 20px',
              backgroundColor: '#add8e6',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
              fontWeight: 'bold',
              marginTop: '20px',
            }}
          >
            Play Again
          </button>
        )}
      </div>
      {gameWon && (
        <div>
          <h3>Congratulations! You've found all the words!</h3>
        </div>
      )}
    </div>
  );
};

export default WordSearchGame;
