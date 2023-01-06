import React from 'react';
import { styled } from '@mui/material';
import Image from 'next/image';
import { ImageProps } from 'next/image';
import heroImage from '../../../../public/image/hero-image.png';

const ImageComponent = styled(Image)<ImageProps>(({ theme }) => ({
  maxWidth: 280,
  maxHeight: 153,
  
  [theme.breakpoints.up('md')]: {
    maxWidth: 234,
    maxHeight: 127,
  },
  [theme.breakpoints.up('lg')]: {
    maxWidth: 301,
    maxHeight: 164,
  },
  [theme.breakpoints.up('xl')]: {
    maxWidth: 435,
    maxHeight: 236,
  },
}));

function HeroImage() {
  return (
    <ImageComponent alt='world' src={heroImage} priority />
  );
}

export default HeroImage;