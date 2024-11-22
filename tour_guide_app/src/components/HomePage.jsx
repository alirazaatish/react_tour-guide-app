import React from 'react';
import { Typography, Box } from '@mui/material';

const HomePage = () => {
  return (
    <Box sx={{ maxWidth: 400, margin: 'auto', mt: 4, p: 3, textAlign: 'center' }}>
      <Typography variant="h4" gutterBottom>
        Welcome to the Tour App!
      </Typography>
      <Typography variant="body1">
        Explore amazing places and plan your next adventure.
      </Typography>
    </Box>
  );
};

export default HomePage;
