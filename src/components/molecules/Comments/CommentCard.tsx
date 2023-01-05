import React from 'react';
import { styled, Card, Stack, CardContent, Container, Typography, Divider } from '@mui/material';
import parser from 'html-react-parser';
import { Gap } from '../../atoms';
import CreatorInfo from '../User/CreatorInfo';
import Vote from '../Vote';

const CommentCardContent = styled(CardContent)({
  padding: 0,
  ':last-child': { padding: 0 },
});

const CommentContainer = Container;

const Comment = styled(Stack)({
  padding: '20px',
});

const CommentOwnerAndCommentVoteAction = styled(Stack)({
  flexDirection: 'row',
  justifyContent: 'space-between',
});

type CommentBodyType = { content: string };

const CommentBody = ({ content }: CommentBodyType) => (
    <Typography variant='content-type' className='thread-body-full'>
        {parser(content)}
    </Typography>
);

type CommentCardType = {
  ownProfile: any,
  threadId: string,
  commentId: string,
  content: string,
  createdAt: string,
  commentOwner: { name: string, avatar: string },
  upVotesBy: string[],
  downVotesBy: string[],
};

function CommentCard({ ownProfile, threadId, commentId, content, createdAt, commentOwner, upVotesBy, downVotesBy }: CommentCardType) {
  return (
        <Card>
            <CommentCardContent>
                <CommentContainer maxWidth={false} disableGutters>
                    <Comment>
                        <CommentOwnerAndCommentVoteAction>
                            <CreatorInfo user={commentOwner ?? ''} createdAt={createdAt} />
                            <Vote type='comments' ownProfile={ownProfile} threadId={threadId} commentId={commentId} upVotesBy={upVotesBy} downVotesBy={downVotesBy} />
                        </CommentOwnerAndCommentVoteAction>
                        <Gap height={20} />
                        <Divider sx={{ borderColor: '#080818' }} />
                        <Gap height={20} />
                        <CommentBody content={content ?? ''} />
                    </Comment>
                </CommentContainer>
            </CommentCardContent>
        </Card>
  );
}

export default CommentCard;