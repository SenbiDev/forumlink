import React from 'react';
import { styled, Stack, Container, Typography, Divider } from '@mui/material';
import parser from 'html-react-parser';
import { Gap } from '../../atoms';
import CreatorInfo from '../User/CreatorInfo';
import Vote from '../Vote';
import CommentForm from '../Comments/CommentForm';
import Comments from '../Comments';

const ParentThreadDetailWrapper = styled(Stack)({
  alignItems: 'center',
});

const ThreadDetailWrapper = styled(Stack)({
  margin: '34px 20px',
  borderRadius: 4,
  backgroundColor: 'rgba(251, 251, 251, 0.4)',
  width: '-webkit-fill-available',
  // maxWidth: '1310px',
});

const CreatedDateAndThreadVote = styled(Stack)({
  flexDirection: 'row',
  justifyContent: 'space-between',
  padding: '20px 20px 0 20px',
  margin: 'unset',
  width: 'unset',
});

const ThreadDetailSection = styled(Container)({
  backgroundColor: 'white',
  padding: '20px',
});

type CategoryNameType = { category: string };

const CategoryName = ({ category }: CategoryNameType) => (
    <Typography variant='content-type' className='category-name' >
        {category}
    </Typography>
);

const ThreadDetailContent = styled(Stack)({
  overflow: 'hidden',
  gap: '7px',
});

type ThreadTitleType = { title: string };

const ThreadTitle = ({ title }: ThreadTitleType) => (
    <Typography variant='content-type' className='thread-title' >
        {title}
    </Typography>
);

type ThreadBodyType = { body: string };

const ThreadBody = ({ body }: ThreadBodyType) => (
    <Typography variant='content-type' className='thread-body-full' >
        {parser(body)}
    </Typography>
);

type ThreadDetailType = { ownProfile: any, threadDetail: any };

function ThreadDetail({ ownProfile, threadDetail }: ThreadDetailType) {
  return (
        <ParentThreadDetailWrapper>
            <ThreadDetailWrapper>
                <CreatedDateAndThreadVote>
                    <CreatorInfo user={threadDetail?.owner ?? ''} createdAt={threadDetail?.createdAt ?? ''} />
                    <Vote type='threads' ownProfile={ownProfile} threadId={threadDetail?.id ?? ''} upVotesBy={(threadDetail?.upVotesBy as string[])} downVotesBy={(threadDetail?.downVotesBy as string[])} />
                </CreatedDateAndThreadVote>
                <Gap height={20} />
                <ThreadDetailSection maxWidth={false} disableGutters>
                    <CategoryName category={threadDetail?.category ?? ''} />
                    <Gap height={20} />
                    <ThreadDetailContent>
                        <ThreadTitle title={threadDetail?.title ?? ''} />
                        <ThreadBody body={threadDetail?.body ?? ''} />
                    </ThreadDetailContent>
                    <Gap height={20} />
                    <Divider sx={{ borderColor: '#080818' }} />
                    <Gap height={20} />
                    <CommentForm threadId={threadDetail?.id ?? ''} />
                    <Gap height={20} />
                </ThreadDetailSection>
                <Gap height={10} />
                <Comments ownProfile={ownProfile} threadId={threadDetail.id ?? ''} comments={threadDetail?.comments} />
            </ThreadDetailWrapper>
        </ParentThreadDetailWrapper>
  );
}

export default ThreadDetail;