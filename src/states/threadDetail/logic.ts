import { AnyAction } from '@reduxjs/toolkit';
import { StateType } from './reducerPropTypes';

function logicOfToggleUpVoteThread(threadDetail: StateType, action: AnyAction) {
  return {
    ...threadDetail,
    upVotesBy: threadDetail?.upVotesBy?.includes(action.payload.upVoteThread?.userId)
      ? threadDetail?.upVotesBy?.filter((upVote)=> upVote !== action.payload.upVoteThread?.userId)
      : threadDetail?.upVotesBy?.concat(action.payload.upVoteThread?.userId),
    downVotesBy: threadDetail?.downVotesBy?.includes(action.payload.upVoteThread?.userId)
      ? threadDetail?.downVotesBy?.filter((downVote)=> downVote !== action.payload.upVoteThread?.userId)
      : threadDetail?.downVotesBy,
  };
}

function logicOfToggleDownVoteThread(threadDetail: StateType, action: AnyAction) {
  return {
    ...threadDetail,
    downVotesBy: threadDetail?.downVotesBy?.includes(action.payload.downVoteThread?.userId)
      ? threadDetail?.downVotesBy?.filter((downVote)=> downVote !== action.payload.downVoteThread?.userId)
      : threadDetail?.downVotesBy?.concat(action.payload.downVoteThread?.userId),
    upVotesBy: threadDetail?.upVotesBy?.includes(action.payload.downVoteThread?.userId)
      ? threadDetail?.upVotesBy?.filter((upVote)=> upVote !== action.payload.downVoteThread?.userId)
      : threadDetail?.upVotesBy,
  };
}

function logicOfToggleNeutralForUpVoteThread(threadDetail: StateType, action: AnyAction) {
  return {
    ...threadDetail,
    upVotesBy: threadDetail?.upVotesBy?.includes(action.payload.upVoteThread?.userId)
                && threadDetail?.upVotesBy?.filter((upVote)=> upVote !== action.payload.neutralVoteThread?.userId),
  };
}

function logicOfToggleNeutralForDownVoteThread(threadDetail: StateType, action: AnyAction) {
  return {
    ...threadDetail,
    downVotesBy: threadDetail?.downVotesBy?.includes(action.payload.downVoteThread?.userId)
                && threadDetail?.downVotesBy?.filter((downVote)=> downVote !== action.payload.neutralVoteThread?.userId),
  };
}

export {
  logicOfToggleUpVoteThread,
  logicOfToggleDownVoteThread,
  logicOfToggleNeutralForUpVoteThread,
  logicOfToggleNeutralForDownVoteThread,
};
