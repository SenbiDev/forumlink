import React from 'react';
import { styled, Icon } from '@mui/material';
import CommentRoundedIcon from '@mui/icons-material/CommentRounded';

const CommentRoundedIconContainer = styled(Icon)(({ theme }) => ({
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
  color: 'black',
  height: '20px',
  width: '20px',
  [theme.breakpoints.up('lg')]: {
    height: '26px',
    width: '26px',
  },
}));

const CommentRoundedIconButton = styled(CommentRoundedIcon)(({ theme }) => ({
  height: '20px',
  width: '20px',
  [theme.breakpoints.up('lg')]: {
    height: '28px',
    width: '28px',
  },

}));

function CommentIcon() {
  return (
    <CommentRoundedIconContainer >
      <CommentRoundedIconButton />
    </CommentRoundedIconContainer>
  );
}

export default CommentIcon;