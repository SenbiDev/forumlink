import { AnyAction } from '@reduxjs/toolkit';
import { ActionType } from './action';
import {
  logicOfToggleUpVoteThread,
  logicOfToggleDownVoteThread,
  logicOfToggleNeutralForUpVoteThread,
  logicOfToggleNeutralForDownVoteThread,
} from './logic';
import { StateType } from './reducerPropTypes';

function threadDetailReducer(threadDetail: StateType = {}, action: AnyAction) {
  switch (action.type) {
    case ActionType.RECEIVE_THREAD_DETAIL:
      return action.payload.threadDetail;
    case ActionType.TOGGLE_UP_VOTE_THREAD:
      return logicOfToggleUpVoteThread(threadDetail, action);
    case ActionType.TOGGLE_DOWN_VOTE_THREAD:
      return logicOfToggleDownVoteThread(threadDetail, action);
    case ActionType.TOGGLE_NEUTRAL_FOR_UPVOTE_THREAD:
      return logicOfToggleNeutralForUpVoteThread(threadDetail, action);
    case ActionType.TOGGLE_NEUTRAL_FOR_DOWNVOTE_THREAD:
      return logicOfToggleNeutralForDownVoteThread(threadDetail, action);
    case ActionType.ADD_COMMENT:
      return { ...threadDetail, comments: [...(threadDetail?.comments ?? []), action.payload.comment] };
    case ActionType.TOGGLE_UP_VOTE_COMMENT:
      return threadDetail;
    case ActionType.TOGGLE_DOWN_VOTE_COMMENT:
      return threadDetail;
    default:
      return threadDetail;
  }
}

export default threadDetailReducer;

