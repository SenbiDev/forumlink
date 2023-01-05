import React from 'react';
import { styled, IconButton, IconButtonProps } from '@mui/material';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';

interface StyledIconButtonProps extends IconButtonProps {
  isUpVoteClicked?: boolean
}

const ExpandLessIconContainer = styled(IconButton, {
  shouldForwardProp: (prop) => prop !== 'isUpVoteClicked',
})<StyledIconButtonProps>(({ theme, isUpVoteClicked }) => ({
  backgroundColor: isUpVoteClicked ? '#CA0BEA' : '#080818',
  color: 'white',
  height: '16px',
  width: '16px',
  ':hover': {
    backgroundColor: '#CA0BEA',
  },
  [theme.breakpoints.up('lg')]: {
    height: '24px',
    width: '24px',
  },
}));

const ExpandLessIconButton = styled(ExpandLessIcon)(({ theme }) => ({
  height: '12px',
  width: '12px',
  [theme.breakpoints.up('lg')]: {
    height: '20px',
    width: '20px',
  },

}));

type UpVoteIconButtonType = { 
  isUpVoteClicked?: boolean,
  onClick: () => void
};

function UpVoteIconButton({ isUpVoteClicked, onClick }: UpVoteIconButtonType) {
  return (
    <ExpandLessIconContainer isUpVoteClicked={isUpVoteClicked} onClick={onClick} >
      <ExpandLessIconButton />
    </ExpandLessIconContainer>
  );
}

export default UpVoteIconButton;