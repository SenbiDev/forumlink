import React from 'react';
import LoadingBar from 'react-redux-loading-bar';
import { styled } from '@mui/material';

const LoadingContainer = styled('div')({
  position: 'sticky',
  top: 0,
});

function Loading() {
  return (
        <LoadingContainer>
            <LoadingBar style={{ backgroundColor: '#2A0BEA' }} />
        </LoadingContainer>
  );
}

export default Loading;
