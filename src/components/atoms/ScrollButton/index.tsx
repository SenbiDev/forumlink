import { styled, IconButton, IconButtonProps } from '@mui/material';
import { useState, useEffect } from 'react';
import KeyboardDoubleArrowUpIcon from '@mui/icons-material/KeyboardDoubleArrowUp';

const KeyboardDoubleArrowUpIconContainer = styled(IconButton)<IconButtonProps>(({ theme }) => ({
  zIndex: 2,
  position: 'fixed',
  top: '90%',
  left: '45%',
  backgroundColor: '#2A0BEA',
  color: 'white',
  '&:hover, &.Mui-focusVisible': {
    transition: '0.3s',
    backgroundColor: '#CA0BEA',
  },
  [theme.breakpoints.up('lg')]: {
    top: 'unset',
    left: 'unset',
    bottom: '20px',
    right: '20px',
  },
}));

type ScrollButtonType = { showBelow: number };

const ScrollButton = ({ showBelow }: ScrollButtonType) => {
  const [show, setShow] = useState(showBelow ? false : true);

  const handleScroll = () => {
    if (window.pageYOffset > showBelow) {
      if (!show) setShow(true);
    } else {
      if (show) setShow(false);
    }
  };

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    if (showBelow) {
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }
  });

  return (
        <>
            {show &&
                <KeyboardDoubleArrowUpIconContainer onClick={handleClick} aria-label="to top">
                    <KeyboardDoubleArrowUpIcon />
                </KeyboardDoubleArrowUpIconContainer>
            }
        </>
  );
};
export default ScrollButton;