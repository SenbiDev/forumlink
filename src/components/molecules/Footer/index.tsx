import React from 'react';
import { Stack, StackProps, Button } from '@mui/material';
import { styled } from '@mui/material';
import Link from 'next/link';

const FooterWrapper = styled(Stack)<StackProps>(({ theme }) => ({
  [theme.breakpoints.up('sm')]: {
    padding: '0 20px 20px 20px',
  },
  [theme.breakpoints.up('xl')]: {
    padding: '0 40px 20px 40px',
  },
}));

const FooterNavigation = styled(Stack)<StackProps>(({ theme }) => ({
  [theme.breakpoints.up('sm')]: {
    gap: 10,
  },
  [theme.breakpoints.up('lg')]: {
    gap: 16,
  },
  [theme.breakpoints.up('xl')]: {
    gap: 30,
  },
}));

function Footer() {
  return (
        <FooterWrapper direction='row' justifyContent='space-between'>
            <Button variant='footer' LinkComponent={Link} href='/'>
                FORUM
                <span style={{ color: '#CA0BEA' }}>
                    link
                </span>
            </Button>
            <FooterNavigation direction='row' alignItems='center'>
                <Button variant='footer navigation' >Help</Button>
                <Button variant='footer navigation' >About us</Button>
                <Button variant='footer navigation' >Contact us</Button>
            </FooterNavigation>
        </FooterWrapper>
  );
}

export default Footer;