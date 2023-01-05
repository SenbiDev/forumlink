import React from 'react';
import { styled, Stack, Typography } from '@mui/material';
import { IconButton } from '../../atoms';
import { useAppDispatch } from '../../../hooks/hooks';
import { asyncToogleUpVoteComment, asyncToogleDownVoteComment } from '../../../states/threadDetail/action';

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

const IconButtonStack = styled(Stack)(({ theme }) => ({
  height: '17px',
  cursor: 'pointer',
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

type VoteCommentActionType = {
  ownProfile: any,
  threadId: string,
  commentId: string,
  upVotesBy: string[],
  downVotesBy: string[],
};

function VoteCommentAction({ ownProfile, threadId, commentId, upVotesBy, downVotesBy }: VoteCommentActionType) {
  const dispatch = useAppDispatch();

  const onUpVoteCommentEventHandler = () => {
    dispatch(asyncToogleUpVoteComment({ threadId, commentId }));
  };

  const onDownVoteCommentEventHandler = () => {
    dispatch(asyncToogleDownVoteComment({ threadId, commentId }));
  };

  return (
        <ParentHorizontalStack>
            <ChildHorizontalStack>
                <IconButtonStack>
                    <IconButton isUpVoteClicked={upVotesBy?.includes((ownProfile?.id)) && (!downVotesBy?.includes(ownProfile.id))} type='up-vote' onClick={onUpVoteCommentEventHandler} />
                </IconButtonStack>
                <CounterStack count={upVotesBy?.length ?? 0} />
            </ChildHorizontalStack>
            <ChildHorizontalStack>
                <IconButtonStack>
                    <IconButton isDownVoteClicked={(!upVotesBy?.includes(ownProfile.id)) && downVotesBy?.includes(ownProfile.id)} type='down-vote' onClick={onDownVoteCommentEventHandler} />
                </IconButtonStack>
                <CounterStack count={downVotesBy?.length ?? 0} />
            </ChildHorizontalStack>
        </ParentHorizontalStack>
  );
}

export default VoteCommentAction;