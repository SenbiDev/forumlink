import React, { ReactNode } from 'react';
import { styled, Backdrop as MuiBackdrop } from '@mui/material';

const StyledBackdrop = styled(MuiBackdrop)(({ theme }) => ({
  background: 'rgba(8, 8, 24, 0.45)',
  backdropFilter: 'blur(25px)',
  zIndex: theme.zIndex.drawer + 1,
}));

type BackdropType = { 
  open: boolean,
  children: ReactNode,
};

function Backdrop({ open, children }: BackdropType) {
  return (
    <StyledBackdrop open={open}>
        {children}
    </StyledBackdrop>
  );
}

export default Backdrop;