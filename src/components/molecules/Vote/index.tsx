import React from 'react';
import VoteThreadAction from './VoteThreadAction';
import VoteCommentAction from './VoteCommentAction';

type VoteType = {
  type: 'threads' | 'comments',
  ownProfile: any,
  threadId: string,
  commentId?: string,
  upVotesBy: string[],
  downVotesBy: string[],
};

function Vote({ type, ownProfile, threadId, commentId, upVotesBy, downVotesBy }: VoteType) {
  return (
    <>
        { type === 'threads' && <VoteThreadAction ownProfile={ownProfile} threadId={threadId} upVotesBy={upVotesBy} downVotesBy={downVotesBy} /> }
        { type === 'comments' && <VoteCommentAction ownProfile={ownProfile} threadId={threadId} commentId={(commentId as string)} upVotesBy={upVotesBy} downVotesBy={downVotesBy} /> }
    </>
  );
}

export default Vote;