import React from 'react';
import { styled, Stack } from '@mui/material';
import CreatorInfo from '../User/CreatorInfo';
import ThreadFeedback from './ThreadFeedback';

const VerticalOrHorizontalStack = styled(Stack)(({ theme }) => ({
  justifyContent: 'space-between',
  gap: '14px',
  [theme.breakpoints.up('md')]: {
    flexDirection: 'row',
  },
  [theme.breakpoints.up('lg')]: {
    gap: '7px',
  },
}));

type ThreadInfoType = {
  user: any,
  createdAt: string,
  feedback: { upVotesBy: number, downVotesBy: number, totalComments: number },
};

function ThreadInfo({ user, createdAt, feedback }: ThreadInfoType) {
  return (
    <VerticalOrHorizontalStack>
        <CreatorInfo user={user} createdAt={createdAt} />
        <ThreadFeedback feedback={feedback} />
    </VerticalOrHorizontalStack>
  );
}

export default ThreadInfo;