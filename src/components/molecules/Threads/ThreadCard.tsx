import React from 'react';
import parser from 'html-react-parser';
import ThreadInfo from './ThreadInfo';
import { Gap } from '../../atoms';
import { styled, Card, CardContent, Container, Typography, Stack, Divider } from '@mui/material';

const ThreadWrapperCard = styled(Card)(({ theme }) => ({
  margin: '0 20px',
  padding: '20px',
  cursor: 'pointer',
  [theme.breakpoints.up('lg')]: {
    margin: 'unset',
  },
}));

const ThreadCardContent = styled(CardContent)({
  padding: 0,
  ':last-child': { padding: 0 },
});

const ThreadContainer = Container;

type ThreadCategoryType = { category: string };

const ThreadCategory = ({ category }: ThreadCategoryType) => (
    <Typography variant='content-type' className='category-name' >
        {category}
    </Typography>
);

const ThreadStack = styled(Stack)({
  height: '100px',
  gap: '7px',
});

type ThreadTitleType = { title: string };

const ThreadTitle = ({ title }: ThreadTitleType) => (
    <Typography variant='content-type' className='thread-title' >
        {title}
    </Typography>
);

type ThreadBodySliceType = { body: string };

const ThreadBodySlice = ({ body }: ThreadBodySliceType) => (
    <Typography variant='content-type' className='thread-body-slice' >
        {parser(body)}
    </Typography>
);

const ThreadDivider = styled(Divider)({
  borderColor: '#080818',
});

type ThreadCardType = {
  onSelectDetailThreadEventHandler: Function,
  threadId: number,
  category: string,
  title: string,
  body: string,
  user: any,
  createdAt: string,
  feedback: {
    upVotesBy: number,
    downVotesBy: number,
    totalComments: number,
  },
};

function ThreadCard({ onSelectDetailThreadEventHandler, threadId, category, title, body, user, createdAt, feedback }: ThreadCardType) {
  const onClickEventHandler = () => {
    onSelectDetailThreadEventHandler(threadId);
  };

  return (
        <ThreadWrapperCard onClick={onClickEventHandler}>
            <ThreadCardContent>
                <ThreadContainer maxWidth={false} disableGutters>
                    <ThreadCategory category={category} />
                    <Gap height={20} />
                    <ThreadStack>
                        <ThreadTitle title={title} />
                        <ThreadBodySlice body={body} />
                    </ThreadStack>
                    <Gap height={20} />
                    <ThreadDivider />
                    <Gap height={20} />
                    <ThreadInfo user={user} createdAt={createdAt} feedback={feedback} />
                </ThreadContainer>
            </ThreadCardContent>
        </ThreadWrapperCard>
  );
}

export default ThreadCard;