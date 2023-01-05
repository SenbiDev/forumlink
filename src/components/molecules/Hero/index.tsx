import React from 'react';
import SmallHero from './SmallHero';
import MediumHero from './MediumHero';
import LargeHero from './LargeHero';
import ExtraLargeHero from './ExtraLargeHero';
import useWidth from '../../../hooks/useWidth';

function Hero() {
  const widthScreen = useWidth();
  return (
    <>
      { widthScreen === 'xs' && <SmallHero /> }
      { widthScreen === 'sm' && <SmallHero /> }
      { widthScreen === 'md' && <MediumHero /> }
      { widthScreen === 'lg' && <LargeHero /> }
      { widthScreen === 'xl' && <ExtraLargeHero /> }
    </>
  );
}

export default Hero;