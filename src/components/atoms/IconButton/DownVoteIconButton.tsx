import React from 'react';
import { styled, IconButton, IconButtonProps } from '@mui/material';
import ExpandMoreRoundedIcon from '@mui/icons-material/ExpandMoreRounded';

interface StyledIconButtonProps extends IconButtonProps {
  isDownVoteClicked?: boolean
}

const ExpandMoreRoundedIconContainer = styled(IconButton, {
  shouldForwardProp: (prop) => prop !== 'isDownVoteClicked',
})<StyledIconButtonProps>(({ theme, isDownVoteClicked }) => ({
  backgroundColor: isDownVoteClicked ? '#CA0BEA' : '#080818',
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

const ExpandMoreRoundedIconButton = styled(ExpandMoreRoundedIcon)(({ theme }) => ({
  height: '12px',
  width: '12px',
  [theme.breakpoints.up('lg')]: {
    height: '20px',
    width: '20px',
  },

}));

type DownVoteIconButtonType = {
  isDownVoteClicked?: boolean,
  onClick: () => void
};

function DownVoteIconButton({ isDownVoteClicked, onClick }: DownVoteIconButtonType) {
  return (
    <ExpandMoreRoundedIconContainer isDownVoteClicked={isDownVoteClicked} onClick={onClick}>
      <ExpandMoreRoundedIconButton />
    </ExpandMoreRoundedIconContainer>
  );
}

export default DownVoteIconButton;