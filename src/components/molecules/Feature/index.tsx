import React from 'react';
import { styled, Stack, Card, Box } from '@mui/material';

const ParentVerticalStack = styled(Stack)({
  alignItems: 'center',
});

const CardComponent = styled(Card)(({ theme }) => ({
  width: '-webkit-fill-available',
  maxWidth: '944px',
  maxHeight: 'max-content',
  margin: '0 20px',
  padding: '20px',
  boxShadow: '-2px 8px 28px 2px #00000040',
  backgroundColor: 'rgba(255, 255, 255, 0.45)',
  borderRadius: '8px',
  [theme.breakpoints.up('md')]: {
    padding: '30px',
  },
  [theme.breakpoints.up('lg')]: {
    padding: '40px',
  },
}));

const ChildVerticalStack = styled(Stack)({
  alignItems: 'center',
});

const BoxComponent = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: '20px',
  [theme.breakpoints.up('md')]: {
    gap: '30px',
  },
  [theme.breakpoints.up('lg')]: {
    gap: '40px',
  },
}));

type FeatureType = { children: React.ReactNode };

function Feature({ children }: FeatureType) {
  return (
    <ParentVerticalStack>
        <CardComponent>
            <ChildVerticalStack>
                <BoxComponent>
                    { children }
                </BoxComponent>
            </ChildVerticalStack>
        </CardComponent>
    </ParentVerticalStack>
  );
}

export default Feature;