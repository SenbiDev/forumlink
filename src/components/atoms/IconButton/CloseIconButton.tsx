import React from 'react';
import { styled, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

const CloseIconContainer = styled(IconButton)(({ theme }) => ({
  backgroundColor: '#080818',
  color: 'white',
  height: '16px',
  width: '16px',
  ':hover' : {
    backgroundColor: '#080818',  
  },
  [theme.breakpoints.up('lg')]: {
    height: '24px',
    width: '24px',
  },
}));

const CloseIconButtons = styled(CloseIcon)(({ theme }) => ({
  height: '12px',
  width: '12px',
  [theme.breakpoints.up('lg')]: {
    height: '20px',
    width: '20px',
  },

}));

type CloseIconButtonType = { onClick: () => void };

function CloseIconButton({ onClick }: CloseIconButtonType) {
  return (
    <CloseIconContainer onClick={onClick} >
      <CloseIconButtons />
    </CloseIconContainer>
  );
}

export default CloseIconButton;