import React from 'react';
import { styled, Stack, Typography } from '@mui/material';
import CommentCard from './CommentCard';
import { CommentTypes } from '../../../utils/responsesTypes';

const CommentsContainer = styled(Stack)({
  gap: '20px',
  margin: '20px',
});

type CommentsTextType = { totalComments: number };

const CommentsText = ({ totalComments }: CommentsTextType) => (
    <Typography variant='text' className='comments' >
        Comments({totalComments})
    </Typography>
);

const CommentList = styled(Stack)({
  gap: '20px',
});

type CommentsType = {
  ownProfile: any,
  threadId: string,
  comments: [],
};

function Comments({ ownProfile, threadId, comments }: CommentsType) {
  return (
        <CommentsContainer>
            <CommentsText totalComments={comments?.length ?? 0} />
            <CommentList>
                {
                    comments?.map((comment: CommentTypes, index: number) => (
                        <CommentCard key={index} ownProfile={ownProfile} threadId={threadId} commentId={comment.id ?? ''} content={(comment?.content as string)} commentOwner={(comment?.owner as { id: '', name: '', email: '', avatar: '' })} createdAt={(comment?.createdAt as string)} upVotesBy={comment?.upVotesBy ?? []} downVotesBy={comment?.downVotesBy ?? []} />
                    ))
                }
            </CommentList>
        </CommentsContainer>
  );
}

export default Comments;