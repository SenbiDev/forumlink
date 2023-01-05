import React from 'react';
import { HeroImage } from '../../atoms';
import { styled, Card, CardContent, Stack, Typography, Box } from '@mui/material';

const CardComponent = styled(Card)({
  minWidth: 320,
  maxHeight: 491,
  margin: '20px',
  boxShadow: '-2px 8px 28px 2px #00000040',
  backgroundColor: 'rgba(255, 255, 255, 0.45)',
  borderRadius: '8px',
});

const CardContentComponent = styled(CardContent)({
  padding: 0,
  ':last-child': {
    paddingBottom: 0,
  },
});

const ParentVerticalStack = styled(Stack)({
  alignItems: 'center',
  gap: '24px',
  margin: '88px 40px',
});

const FirstChild = styled(Stack)({
  order: 1,
  flexDirection: 'row',
  gap: '28px',
});

const SecondChild = styled(Stack)({
  order: 2,
});

const TypographyStack = styled(Stack)({
  width: 274,
  height: 102,
});

const HeroImageStack = () => (
    <Stack>
        <HeroImage />
    </Stack>
);

const BoxComponent = styled(Box)({
  width: 585,
});

function LargeHero() {
  return (
        <CardComponent>
            <CardContentComponent>
                <ParentVerticalStack>
                    <FirstChild>
                        <TypographyStack>
                            <Typography variant='text' className='connected'>Connected</Typography>
                            <Typography variant='text' className='with'>with</Typography>
                            <Typography variant='text' className='the world'>The World</Typography>
                        </TypographyStack>
                        <HeroImageStack />
                    </FirstChild>
                    <SecondChild>
                        <BoxComponent>
                            <Typography variant='text' className='exchange'>
                                Exchange thoughts, share ideas and opinions, solve problems through world communication
                            </Typography>
                        </BoxComponent>
                    </SecondChild>
                </ParentVerticalStack>
            </CardContentComponent>
        </CardComponent>
  );
}

export default LargeHero;