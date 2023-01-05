import React from 'react';
import { Stack, StackProps, Button } from '@mui/material';
import { styled } from '@mui/material';
import Link from 'next/link';

const StyledStackParent = styled(Stack)<StackProps>(({ theme }) => ({
  [theme.breakpoints.up('sm')]: {
    padding: '20px',
  },
  [theme.breakpoints.up('xl')]: {
    padding: '0 40px',
  },
}));

const StyledStackChild = styled(Stack)<StackProps>(({ theme }) => ({
  [theme.breakpoints.up('sm')]: {
    gap: 12,
  },
  [theme.breakpoints.up('lg')]: {
    gap: 16,
  },
  [theme.breakpoints.up('xl')]: {
    gap: 30,
  },
}));

function AuthNavigation() {
  return (
        <StyledStackParent direction='row' justifyContent='space-between'>
            <Button variant='navbar' LinkComponent={Link} href='/' >
                FORUM
                <span style={{ color: '#CA0BEA' }}>
                    link
                </span>
            </Button>
            <StyledStackChild direction='row' alignItems='center'>
                <Button variant='login' LinkComponent={Link} href='/login'>Log In</Button>
                <Button variant='signup' LinkComponent={Link} href='/register'>Sign Up</Button>
            </StyledStackChild>
        </StyledStackParent>
  );
}

export default AuthNavigation;