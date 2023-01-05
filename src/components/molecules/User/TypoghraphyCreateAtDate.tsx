import React from 'react';
import { styled, Stack, Typography, Box } from '@mui/material';

const ParentHorizontalStack = styled(Stack)({
  flexDirection: 'row',
  alignItems: 'center',
  gap: '5px',
});

const ShapeStack = styled(Stack)({
  height: '5px',
});

const CircleBox = styled(Box)({
  width: 4,
  height: 4,
  borderRadius: 2,
  backgroundColor: '#CA0BEA',
});

type DateStackType = { createdAt: string };

const DateStack = ({ createdAt }: DateStackType) => (
    <Typography variant='content-type' className='thread-created-date' >
        { createdAt }
    </Typography>
);

type TypoghraphyCreateAtDateType = { createdAt: string };

function TypoghraphyCreateAtDate({ createdAt }: TypoghraphyCreateAtDateType) {
  const dateLocale = new Date(createdAt).toLocaleDateString('id-ID').replace('/', '-').replace('/', '-');
  return (
        <ParentHorizontalStack>
            <ShapeStack>
                <CircleBox />
            </ShapeStack>
            <DateStack createdAt={dateLocale} />
        </ParentHorizontalStack>
  );
}

export default TypoghraphyCreateAtDate;