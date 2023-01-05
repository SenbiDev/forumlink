import React from 'react';
import { styled, Icon } from '@mui/material';
import ExpandMoreRoundedIcon from '@mui/icons-material/ExpandMoreRounded';

const ExpandMoreRoundedIconContainer = styled(Icon)(({ theme }) => ({
  display: 'inline-flex',
  WebKitBoxAlign: 'center',
  alignItems: 'center',
  WebkitBoxPack: 'center',
  justifyContent: 'center',
  position: 'relative',
  boxSizing: 'border-box',
  outline: 0,
  border: 0,
  margin: 0,
  userSelect: 'none',
  verticalAlign: 'middle',
  textDecoration: 'none',
  textAlign: 'center',
  flex: '0 0 auto',
  fontSize: '1.5rem',
  padding: '8px',
  borderRadius: '50%',
  overflow: 'visibler',
  backgroundColor: '#080818',
  color: 'white',
  height: '16px',
  width: '16px',
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

function DownVoteIcon() {
  return (
    <ExpandMoreRoundedIconContainer >
      <ExpandMoreRoundedIconButton />
    </ExpandMoreRoundedIconContainer>
  );
}

export default DownVoteIcon;