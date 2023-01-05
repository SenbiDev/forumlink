import React from 'react';
import { styled, Stack, Typography } from '@mui/material';
import { Icon } from '../../atoms';

const ParentHorizontalStack = styled(Stack)(({ theme }) => ({
  flexDirection: 'row',
  width: 'max-content',
  gap: '7px',
  [theme.breakpoints.up('lg')]: {
    gap: '10px',
  },
}));

const ChildHorizontalStack = styled(Stack)({
  flexDirection: 'row',
  alignItems: 'center',
  gap: 'inherit',
});

const IconStack = styled(Stack)(({ theme }) => ({
  height: '17px',
  [theme.breakpoints.up('lg')]: {
    height: '25px',
  },
}));

type CounterStackType = { count: number };

const CounterStack = ({ count }: CounterStackType) => (
    <Typography variant='content-type' className='number'>
        {count}
    </Typography>
);

type ThreadFeedbackType = {
  feedback: {
    upVotesBy: number,
    downVotesBy: number,
    totalComments: number,
  }
};

function ThreadFeedback({ feedback }: ThreadFeedbackType) {
  return (
        <ParentHorizontalStack>
            <ChildHorizontalStack>
                <IconStack>
                    <Icon type='up-vote' />
                </IconStack>
                <CounterStack count={feedback.upVotesBy} />
            </ChildHorizontalStack>
            <ChildHorizontalStack>
                <IconStack>
                    <Icon type='down-vote' />
                </IconStack>
                <CounterStack count={feedback.downVotesBy} />
            </ChildHorizontalStack>
            <ChildHorizontalStack>
                <IconStack>
                    <Icon type='comment' />
                </IconStack>
                <CounterStack count={feedback.totalComments} />
            </ChildHorizontalStack>
        </ParentHorizontalStack>
  );
}   

export default ThreadFeedback;