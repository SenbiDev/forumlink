import React from 'react';
import { styled, Icon } from '@mui/material';
import StarRoundedIcon from '@mui/icons-material/StarRounded';

const StarRoundedIconContainer = styled(Icon)(({ theme }) => ({
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
  overflow: 'visibler',
  color: '#2A0BEA',
  height: '20px',
  width: '20px',
  [theme.breakpoints.up('lg')]: {
    height: '26px',
    width: '26px',
  },
}));

const StarRoundedIcons = styled(StarRoundedIcon)(({ theme }) => ({
  height: '20px',
  width: '20px',
  [theme.breakpoints.up('lg')]: {
    height: '28px',
    width: '28px',
  },

}));

function StarIcon() {
  return (
    <StarRoundedIconContainer >
      <StarRoundedIcons />
    </StarRoundedIconContainer>
  );
}

export default StarIcon;