import React from 'react';
import { Box, Typography } from '@mui/material';

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        p: 2,
        bgcolor: '#333', 
        color: '#fff', 
        textAlign: 'center',
        position: 'fixed',
        bottom: 0,
        width: '100%',
      }}
    >
      <Typography variant="body2">
        © 2024 Todo Dashboard. All rights reserved.
      </Typography>
    </Box>
  );
};

export default Footer;
