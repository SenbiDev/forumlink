import React from 'react';
import { Stack, StackProps, Button } from '@mui/material';
import { styled } from '@mui/material';
import { Navigation } from '../../atoms';
import Link from 'next/link';

const StyledStackParent = styled(Stack)<StackProps>(({ theme }) => ({
  [theme.breakpoints.up('sm')]: {
    padding: '20px 20px 0 20px',
  },
  [theme.breakpoints.up('lg')]: {
    padding: '20px 30px 0 30px',
  },
  [theme.breakpoints.up('xl')]: {
    padding: '20px 40px 0 40px',
  },
}));

function PageNavigation() {
  return (
        <StyledStackParent direction='row' justifyContent='space-between' alignItems={'baseline'} >
            <Button variant='navbar' LinkComponent={Link} href='/'>
                FORUM
                <span style={{ color: '#CA0BEA' }}>
                    link
                </span>
            </Button>
            <Navigation />
        </StyledStackParent>
  );
}

export default PageNavigation;