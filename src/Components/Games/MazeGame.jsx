import React, { useState, useEffect }  from 'react';
import Sfooter from '../Sfooter';

// Predefined maze templates of increasing difficulty
const mazeTemplates = [
    // Level 1: Simple maze
    [
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 0, 0, 0, 1, 0, 1, 0, 0, 1],
        [1, 0, 1, 0, 1, 0, 1, 0, 1, 1],
        [1, 0, 1, 0, 0, 0, 1, 0, 1, 1],
        [1, 0, 1, 1, 1, 0, 1, 0, 0, 1],
        [1, 0, 1, 0, 0, 0, 0, 1, 0, 1],
        [1, 0, 1, 1, 1, 1, 0, 1, 0, 1],
        [1, 0, 0, 0, 1, 0, 0, 0, 1, 1],
        [1, 1, 1, 0, 1, 1, 1, 0, 0, 1],
        [1, 1, 1, 1, 1, 1, 1, 0, 1, 1],
    ],
    // Level 2: Slightly harder maze
    [
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 0, 1, 0, 0, 0, 1, 1, 1, 1],
        [1, 0, 1, 0, 1, 0, 1, 0, 0, 1],
        [1, 0, 1, 1, 1, 0, 1, 1, 0, 1],
        [1, 0, 0, 0, 1, 0, 1, 1, 0, 1],
        [1, 1, 0, 1, 0, 0, 0, 0, 0, 1],
        [1, 0, 0, 0, 0, 0, 1, 1, 1, 1],
        [1, 1, 0, 0, 1, 0, 0, 0, 1, 1],
        [1, 1, 1, 1, 1, 0, 1, 0, 0, 1],
        [1, 1, 1, 0, 1, 1, 1, 0, 1, 1],
    ],
    // Level 3: Even harder maze
    [
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 0, 1, 0, 0, 0, 1, 1, 1, 1],
        [1, 0, 1, 0, 1, 0, 1, 0, 0, 1],
        [1, 0, 1, 1, 1, 0, 1, 1, 0, 1],
        [1, 0, 0, 0, 1, 0, 1, 1, 0, 1],
        [1, 1, 0, 1, 0, 1, 0, 0, 0, 1],
        [1, 0, 0, 1, 0, 1, 0, 1, 1, 1],
        [1, 1, 0, 0, 0, 1, 1, 0, 1, 1],
        [1, 1, 1, 1, 0, 0, 0, 0, 0, 1],
        [1, 1, 1, 0, 1, 1, 1, 0, 1, 1],
    ],
];

const MazeGame = () => {
    const start = { row: 1, col: 1 }; // Starting position
    const exit = { row: 8, col: 8 }; // Exit position

    // State variables
    const [mazeTemplate, setMazeTemplate] = useState(mazeTemplates[0]);
    const [playerPosition, setPlayerPosition] = useState(start);
    const [gameOver, setGameOver] = useState(false);
    const [mazeLevel, setMazeLevel] = useState(0);

    // Handle player movement with arrow keys
    const handleKeyPress = (event) => {
        if (gameOver) return;

        const { row, col } = playerPosition;
        if (event.key === 'ArrowUp' && row > 0 && mazeTemplate[row - 1][col] === 0) {
            setPlayerPosition({ row: row - 1, col });
        }
        if (event.key === 'ArrowDown' && row < 9 && mazeTemplate[row + 1][col] === 0) {
            setPlayerPosition({ row: row + 1, col });
        }
        if (event.key === 'ArrowLeft' && col > 0 && mazeTemplate[row][col - 1] === 0) {
            setPlayerPosition({ row, col: col - 1 });
        }
        if (event.key === 'ArrowRight' && col < 9 && mazeTemplate[row][col + 1] === 0) {
            setPlayerPosition({ row, col: col + 1 });
        }
    };

    // Victory condition: when the player reaches the exit
    useEffect(() => {
        const { row, col } = playerPosition;
        console.log('Player position:', playerPosition); // Debugging line
        if (row === exit.row && col === exit.col) {
            console.log('Player reached the exit!');
            setGameOver(true);
        }
    }, [playerPosition]);

    // Add event listener for key press
    useEffect(() => {
        window.addEventListener('keydown', handleKeyPress);
        return () => {
            window.removeEventListener('keydown', handleKeyPress);
        };
    }, [playerPosition]);

    const renderMaze = () => {
        const mazeWithPlayer = mazeTemplate.map((row, rowIndex) =>
            row.map((cell, colIndex) => {
                if (rowIndex === playerPosition.row && colIndex === playerPosition.col) {
                    return 'P'; // Player
                }
                if (rowIndex === exit.row && colIndex === exit.col) {
                    return 'E'; // Exit
                }
                return cell === 1 ? 'W' : ' '; // W = wall, space = path
            })
        );

        return mazeWithPlayer.map((row, rowIndex) => (
            <div key={rowIndex} style={{ display: 'flex' }}>
                {row.map((cell, colIndex) => (
                    <div
                        key={colIndex}
                        style={{
                            width: 30,
                            height: 30,
                            backgroundColor:
                                cell === 'W'
                                    ? 'black'
                                    : cell === 'P'
                                    ? 'blue'
                                    : cell === 'E'
                                    ? 'green'
                                    : 'white',
                            border: '1px solid gray',
                        }}
                    ></div>
                ))}
            </div>
        ));
    };

    const handlePlayAgain = () => {
        setPlayerPosition(start);
        setGameOver(false);
        setMazeLevel((prevLevel) => {
            const nextLevel = prevLevel + 1;
            setMazeTemplate(mazeTemplates[nextLevel] || mazeTemplates[mazeTemplates.length - 1]); // Set to next level or the last one
            return nextLevel;
        });
    };

    return (<>
        <div style={{ textAlign: 'center' }} className='min-h-[75vh] w-full flex flex-col items-center justify-center bg-pink-300'>
            <h2 className='text-4xl text-white'>Maze Game - Level {mazeLevel + 1}</h2>
            {gameOver ? (
                <div>
                    <h3>Congratulations! You solved the maze!</h3>
                    {mazeLevel + 1 < mazeTemplates.length ? (
                        <button onClick={handlePlayAgain}>Play Next Level</button>
                    ) : (
                        <button onClick={() => window.location.reload()}>Play Again from Level 1</button>
                    )}
                </div>
            ) : (
                <>
                    <h4>Use arrow keys to navigate. Reach the exit (E).</h4>
                    <div style={{ margin: '20px' }}>{renderMaze()}</div>
                </>
            )}
            
        </div>
        <Sfooter/>
        </>
    );
};

export default MazeGame;
