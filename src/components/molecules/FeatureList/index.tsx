import React from 'react';
import { styled, Stack } from '@mui/material';

const StyledStack = styled(Stack)(({ theme }) => ({
  gap: '30px',
  marginTop: '50px',
  marginBottom: '34px',
  [theme.breakpoints.up('md')]: {
    gap: '40px',
  },
  [theme.breakpoints.up('lg')]: {
    gap: '50px',
    marginTop: '60px',
  },
}));

type FeatureListType = { children: React.ReactNode };

function FeatureList({ children }: FeatureListType) {
  return (
    <StyledStack>
        { children }
    </StyledStack>
  );
}

export default FeatureList;