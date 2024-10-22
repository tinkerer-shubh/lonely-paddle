import React, { useEffect, useState } from 'react';
import { Box } from '@mui/material';
import { useMediaQuery } from '@mui/material';

const isMobile = useMediaQuery('(max-width: 768px)');

const [isGameOver, setIsGameOver] = useState(false);
const [isGameStarted, setIsGameStarted] = useState(false);

const Game = () => {
  const [paddleY, setPaddleY] = useState(200); // Initial paddle position
  const [ballPosition, setBallPosition] = useState({ x: 250, y: 250 });
  const [ballDirection, setBallDirection] = useState({ dx: 2, dy: 2 });

  const movePaddle = (event) => {
    if (event.key === 'ArrowUp' && paddleY > 0) {
      setPaddleY(paddleY - 30); // Speed up paddle movement for more fluid control
    } else if (event.key === 'ArrowDown' && paddleY < 400) {
      setPaddleY(paddleY + 30);
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', movePaddle);
    return () => {
      window.removeEventListener('keydown', movePaddle);
    };
  }, [paddleY]);

  useEffect(() => {
    const interval = setInterval(() => {
      setBallPosition((prev) => ({
        x: prev.x + ballDirection.dx,
        y: prev.y + ballDirection.dy,
      }));

      // Collision detection for ball bounce
      if (ballPosition.y <= 0 || ballPosition.y >= 480) {
        setBallDirection((prev) => ({ ...prev, dy: -prev.dy }));
      }
      if (ballPosition.x <= 0 || ballPosition.x >= 480) {
        setBallDirection((prev) => ({ ...prev, dx: -prev.dx }));
      }
    }, 10);

    return () => clearInterval(interval);
  }, [ballPosition, ballDirection]);

  return (
    <Box
      sx={{
        position: 'relative',
        width: '500px',
        height: '500px',
        backgroundColor: '#000',
        borderRadius: '12px',
        boxShadow: '0 4px 15px rgba(0, 0, 0, 0.5)',
        overflow: 'hidden',
      }}
    >
      {/* Paddle */}
      <Box
        sx={{
          position: 'absolute',
          top: `${paddleY}px`,
          left: '10px',
          width: '15px',
          height: '100px',
          backgroundColor: '#39ff14', // Neon green
          borderRadius: '8px',
          boxShadow: '0 0 20px #39ff14',
          transition: 'top 0.1s ease-out',
        }}
      />

      {/* Ball */}
      <Box
        sx={{
          position: 'relative',
          width: isSmallScreen ? '300px' : '500px',
          height: isSmallScreen ? '300px' : '500px',
          backgroundColor: '#000',
          borderRadius: '12px',
          boxShadow: '0 4px 15px rgba(0, 0, 0, 0.5)',
          overflow: 'hidden',
        }}
      />
      
    </Box>
  );
};

export default Game;
