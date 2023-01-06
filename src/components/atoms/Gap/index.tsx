import React from 'react';
import { Box } from '@mui/material';

type GapType = { 
  width?: number | string,
  height: number | string
};

function Gap({ width, height }: GapType) {
  return (
    <Box sx={{ width: width, height: height }} />
  );
}

export default Gap;