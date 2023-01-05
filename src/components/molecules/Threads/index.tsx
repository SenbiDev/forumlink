import React from 'react';
import { Category, Gap } from '../../atoms';
import User from '../User';
import { styled, Stack, Container, Button, Typography, Divider } from '@mui/material';
import ThreadList from './ThreadList';

const ParentThreadsWrapper = styled(Stack)(({ theme }) => ({
  [theme.breakpoints.up('xl')]: {
    alignItems: 'center',
  },
}));

const ThreadsWrapper = styled(Stack)({
  margin: '34px 20px',
  borderRadius: 4,
  backgroundColor: 'rgba(251, 251, 251, 0.4)',
  width: '-webkit-fill-available',
});

const VerticalOrHorizontalStack = styled(Stack)(({ theme }) => ({
  flexDirection: 'column',
  [theme.breakpoints.up('lg')]: {
    flexDirection: 'row',
  },
}));

const ThreadCreatorContainer = styled(Container)({
  padding: '20px 20px 0 20px',
  margin: 'unset',
  width: 'unset',
});

const VerticalOrHorizontalThreadCreator = styled(Stack)(({ theme }) => ({
  flexDirection: 'row',
  justifyContent: 'space-between',
  [theme.breakpoints.up('lg')]: {
    flexDirection: 'column',
    alignItems: 'center',
    gap: '25px',
  },
}));

const CategoryDivider = () => (
  <Divider>
    <Typography variant='text' className='category' >
      Category
    </Typography>
  </Divider>
);

const ThreadFilterAction = () => (
  <Category />
);

const ThreadListStackContainer = styled(Stack)({
  width: '100%',
  height: '-webkit-fill-available',
  overflow: 'hidden',
});

type ThreadsType = {
  users: any,
  threads: never[],
  onSelectDetailThreadEventHandler: Function,
  onSignOutEventHandler: (event: any) => void,
  onModalToggleEventHandler: () => void,
};

function Threads({ users, threads, onSelectDetailThreadEventHandler, onSignOutEventHandler, onModalToggleEventHandler }: ThreadsType) {
  return (
    <ParentThreadsWrapper>
      <ThreadsWrapper>
        <VerticalOrHorizontalStack>
          <ThreadCreatorContainer disableGutters>
            <VerticalOrHorizontalThreadCreator>
              <User onSignOutEventHandler={onSignOutEventHandler} />
              <Button variant='create-thread' onClick={onModalToggleEventHandler} >Create a thread</Button>
            </VerticalOrHorizontalThreadCreator>
            <Gap height={20} />
            <CategoryDivider />
            <Gap height={10} />
            <ThreadFilterAction />
          </ThreadCreatorContainer>
          <ThreadListStackContainer>
            <ThreadList users={users} threads={threads} onSelectDetailThreadEventHandler={onSelectDetailThreadEventHandler} />
          </ThreadListStackContainer>
        </VerticalOrHorizontalStack>
      </ThreadsWrapper>
    </ParentThreadsWrapper>
  );
}

export default Threads;