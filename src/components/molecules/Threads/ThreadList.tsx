import React from 'react';
import ThreadCard from './ThreadCard';
import { styled, Grid } from '@mui/material';

const GridContainer = styled(Grid)(({ theme }) => ({
  padding: '20px 0',
  [theme.breakpoints.up('lg')]: {
    paddingRight: '20px',
  },
  [theme.breakpoints.up('xl')]: {
    minWidth: '834px',
  },
}));

const GridItem = styled(Grid)(({ theme }) => ({
  minWidth: '-webkit-fill-available',
  [theme.breakpoints.up('xl')]: {
    minWidth: 'auto',
  },
}));

type ThreadListType = {
  users: any,
  threads: never[],
  onSelectDetailThreadEventHandler: Function,
};

function ThreadList({ users, threads, onSelectDetailThreadEventHandler }: ThreadListType) {
  return (
        <GridContainer container rowSpacing={{ xs: '20px' }} columnSpacing={{ xl: '20px' }} columns={{ xl: 12 }}>
            {threads.map(({ id, category, title, body, ownerId, createdAt, upVotesBy, downVotesBy, totalComments }, index) => (
                <GridItem item xl={6} key={index}>
                    <ThreadCard key={index} onSelectDetailThreadEventHandler={onSelectDetailThreadEventHandler} threadId={id} category={category} title={title} body={body} user={(users.find((user: any) => user.id === ownerId))} createdAt={createdAt} feedback={{ upVotesBy: ((upVotesBy as []).length ?? 0), downVotesBy: ((downVotesBy as []).length ?? 0), totalComments }} />
                </GridItem>
            ))}
        </GridContainer>
  );
}

export default ThreadList;