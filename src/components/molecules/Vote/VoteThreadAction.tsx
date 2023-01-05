import React from 'react';
import { styled, Stack, Typography } from '@mui/material';
import { IconButton } from '../../atoms';
import { useAppDispatch } from '../../../hooks/hooks';
import { asyncToogleUpVoteThread, asyncToogleDownVoteThread, asyncToogleNeutralForUpVoteThread, asyncToogleNeutralForDownVoteThread } from '../../../states/threadDetail/action';

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

type VoteThreadActionType = {
  ownProfile: any,
  threadId: string,
  upVotesBy: string[],
  downVotesBy: string[],
};

function VoteThreadAction({ ownProfile, threadId, upVotesBy, downVotesBy }: VoteThreadActionType) {
  const dispatch = useAppDispatch();

  const onUpVoteThreadEventHandler = () => {
    if (upVotesBy?.includes(ownProfile?.id) && (!downVotesBy?.includes(ownProfile?.id))) {
      dispatch(asyncToogleNeutralForUpVoteThread(threadId));
    } else {
      dispatch(asyncToogleUpVoteThread(threadId));
    }
  };

  const onDownVoteThreadEventHandler = () => {
    if ((!upVotesBy?.includes(ownProfile?.id)) && downVotesBy?.includes(ownProfile?.id)) {
      dispatch(asyncToogleNeutralForDownVoteThread(threadId));
    } else {
      dispatch(asyncToogleDownVoteThread(threadId));
    }
  };    

  return (
        <ParentHorizontalStack>
            <ChildHorizontalStack>
                <IconButtonStack>
                    <IconButton isUpVoteClicked={upVotesBy?.includes(ownProfile?.id) && (!downVotesBy?.includes(ownProfile?.id))} type='up-vote' onClick={onUpVoteThreadEventHandler} />
                </IconButtonStack>
                <CounterStack count={upVotesBy?.length ?? 0} />
            </ChildHorizontalStack>
            <ChildHorizontalStack>
                <IconButtonStack>
                    <IconButton isDownVoteClicked={(!upVotesBy?.includes(ownProfile?.id)) && downVotesBy?.includes(ownProfile?.id)} type='down-vote' onClick={onDownVoteThreadEventHandler} />
                </IconButtonStack>
                <CounterStack count={downVotesBy?.length ?? 0} />
            </ChildHorizontalStack>
        </ParentHorizontalStack>
  );
}

export default VoteThreadAction;