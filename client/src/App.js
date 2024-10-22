import React from 'react';
import Game from './components/Game';
import { Container, Typography, Box } from '@mui/material';

function App() {
  return (
    <Container
      maxWidth="sm"
      sx={{
        backgroundColor: '#1c1c1c',
        padding: '2rem',
        borderRadius: '8px',
        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.2)',
        textAlign: 'center',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Typography
        variant="h2"
        component="h1"
        gutterBottom
        sx={{ color: '#fff', marginBottom: '2rem', fontWeight: 'bold' }}
      >
        Lonely Paddle
      </Typography>
      <Box sx={{ marginBottom: '1rem' }}>
        <Game />
      </Box>
      <Typography
        variant="body1"
        sx={{ color: '#aaa', marginTop: '1rem' }}
      >
        Use the Arrow Keys to move the paddle. Enjoy the game!
      </Typography>
    </Container>
  );
}

export default App;
