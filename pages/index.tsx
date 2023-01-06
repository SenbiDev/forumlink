import React from 'react';
import { Typography } from '@mui/material';
import { Hero, FeatureList, Feature, FeatureImage } from '../src/components';
import filterImageSM from '../public/image/filter-image-sm.png';
import filterImageMD from '../public/image/filter-image-md.png';
import voteImageSM from '../public/image/vote-image-sm.png';
import voteImageMD from '../public/image/vote-image-md.png';
import createImageSM from '../public/image/create-image-sm.png';
import createImageMD from '../public/image/create-image-md.png';


export default function HomePage() {
  return (
    <>
      <Hero />
      <FeatureList>
        <Feature>
          <Typography variant='text' className='feature'>
            Search threads quickly by category
          </Typography>
          <FeatureImage type='filter' srcSM={filterImageSM} srcMD={filterImageMD} />
        </Feature>

        <Feature>
          <Typography variant='text' className='feature'>
            Rate your rating of a thread based on voting
          </Typography>
          <FeatureImage type='vote' srcSM={voteImageSM} srcMD={voteImageMD} />
        </Feature>

        <Feature>
          <Typography variant='text' className='feature'>
            Create your own thread and let the world see and give an opinion
          </Typography>
          <FeatureImage type='create' srcSM={createImageSM} srcMD={createImageMD} />
        </Feature>
      </FeatureList>
    </>
  );
}
