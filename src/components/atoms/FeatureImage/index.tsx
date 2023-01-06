import React from 'react';
import { styled } from '@mui/material';
import Image, { StaticImageData } from 'next/image';
import { ImageProps } from 'next/image';
import useWidth from '../../../hooks/useWidth';

const ImageComponentSM = styled(Image)<ImageProps & { type: 'filter' | 'vote' | 'create' }>(({ type }) => {
  if (type === 'filter') {
    return {  maxWidth: 280, maxHeight: 169 };
  } else if (type === 'vote') {
    return {  maxWidth: 280, maxHeight: 176 };
  } else {
    return {  maxWidth: 280, maxHeight: 57 };
  }
});

const ImageComponentMD = styled(Image)<ImageProps & { type: 'filter' | 'vote' | 'create' }>(({ theme, type }) => {
  if (type === 'filter') {
    return {
      [theme.breakpoints.up('md')]: {
        maxWidth: 480,
        maxHeight: 154,
      },
      [theme.breakpoints.up('lg')]: {
        maxWidth: 604,
        maxHeight: 194,
      },
    };
  } else if (type === 'vote') {
    return {
      [theme.breakpoints.up('md')]: {
        maxWidth: 480,
        maxHeight: 172,
      },
      [theme.breakpoints.up('lg')]: {
        maxWidth: 604,
        maxHeight: 217,
      },
    };
  } else {
    return {
      [theme.breakpoints.up('md')]: {
        maxWidth: 480,
        maxHeight: 54,
      },
      [theme.breakpoints.up('lg')]: {
        maxWidth: 604,
        maxHeight: 68,
      },
    };
  }
});

type FeatureImageType = {
  type: 'filter' | 'vote' | 'create',
  srcSM: StaticImageData,
  srcMD: StaticImageData,
};

function FeatureImage({ type, srcSM, srcMD }: FeatureImageType) {
  const widthScreen = useWidth();

  return (
    <>
        { (widthScreen === 'xs' || widthScreen === 'sm') && <ImageComponentSM alt='filter' src={srcSM} priority type={type} /> }
        { (widthScreen !== 'xs' && widthScreen !== 'sm') && <ImageComponentMD alt='filter' src={srcMD} priority type={type} /> }
    </>
  );
}

export default FeatureImage;