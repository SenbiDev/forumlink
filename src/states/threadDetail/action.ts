import { hideLoading, showLoading } from 'react-redux-loading-bar';
import api from '../../utils/api';
import { ReceiveThreadDetailActionParam, ThreadVoteTypes, CommentTypes, CommentVoteTypes } from './actionPropTypes';
import { asyncPopulateUsersAndThreads } from '../shared/action';

const ActionType = {
  RECEIVE_THREAD_DETAIL: 'RECEIVE_THREAD_DETAIL',
  TOGGLE_UP_VOTE_THREAD: 'TOGGLE_UP_VOTE_THREAD',
  TOGGLE_DOWN_VOTE_THREAD: 'TOGGLE_DOWN_VOTE_THREAD',
  TOGGLE_NEUTRAL_FOR_UPVOTE_THREAD: 'TOGGLE_NEUTRAL_FOR_UPVOTE_THREAD',
  TOGGLE_NEUTRAL_FOR_DOWNVOTE_THREAD: 'TOGGLE_NEUTRAL_FOR_DOWNVOTE_THREAD',
  ADD_COMMENT: 'ADD_COMMENT',
  TOGGLE_UP_VOTE_COMMENT: 'TOGGLE_UP_VOTE_COMMENT',
  TOGGLE_DOWN_VOTE_COMMENT: 'TOGGLE_DOWN_VOTE_COMMENT',
};

function receiveThreadDetailActionCreator(threadDetail: ReceiveThreadDetailActionParam) {
  return {
    type: ActionType.RECEIVE_THREAD_DETAIL,
    payload: {
      threadDetail,
    },
  };
}


function toggleUpVoteThreadActionCreator(upVoteThread: ThreadVoteTypes) {
  return {
    type: ActionType.TOGGLE_UP_VOTE_THREAD,
    payload: {
      upVoteThread,
    },
  };
}

function toggleDownVoteThreadActionCreator(downVoteThread: ThreadVoteTypes) {
  return {
    type: ActionType.TOGGLE_DOWN_VOTE_THREAD,
    payload: {
      downVoteThread,
    },
  };
}

function toggleNeutralForUpVoteThreadActionCreator(neutralVoteThread: ThreadVoteTypes, upVoteThread: ThreadVoteTypes) {
  return {
    type: ActionType.TOGGLE_NEUTRAL_FOR_UPVOTE_THREAD,
    payload: {
      neutralVoteThread,
      upVoteThread,
    },
  };
}

function toggleNeutralForDownVoteThreadActionCreator(neutralVoteThread: ThreadVoteTypes, downVoteThread: ThreadVoteTypes) {
  return {
    type: ActionType.TOGGLE_NEUTRAL_FOR_DOWNVOTE_THREAD,
    payload: {
      neutralVoteThread,
      downVoteThread,
    },
  };
}

function addCommentActionCreator(comment: CommentTypes) {
  return {
    type: ActionType.ADD_COMMENT,
    payload: {
      comment,
    },
  };
}

function toggleUpVoteCommentActionCreator(upVoteComment: CommentVoteTypes) {
  return {
    type: ActionType.TOGGLE_UP_VOTE_COMMENT,
    payload: {
      upVoteComment,
    },
  };
}

function toggleDownVoteCommentActionCreator(downVoteComment: CommentVoteTypes) {
  return {
    type: ActionType.TOGGLE_DOWN_VOTE_COMMENT,
    payload: {
      downVoteComment,
    },
  };
}

function asyncReceiveThreadDetail(threadId: string) {
  return async (dispatch: any) => {
    dispatch(showLoading());
    try {
      const threadDetail = await api.getThreadDetail(threadId);
      dispatch(receiveThreadDetailActionCreator(threadDetail ?? {}));
    } catch (error: any) {
      dispatch(receiveThreadDetailActionCreator({}));
      alert(error.message);
    }
    dispatch(hideLoading());
  };
}

function asyncToogleUpVoteThread(threadId: string) {
  return async (dispatch: any) => {
    dispatch(showLoading());
    try {
      const upVoteThread = await api.toggleUpVoteThread(threadId);
      dispatch(toggleUpVoteThreadActionCreator(upVoteThread ?? {}));
      dispatch(asyncPopulateUsersAndThreads());
    } catch (error: any) {
      dispatch(toggleUpVoteThreadActionCreator({}));
      alert(error.message);
    }
    dispatch(hideLoading());
  };
}

function asyncToogleDownVoteThread(threadId: string) {
  return async (dispatch: any) => {
    dispatch(showLoading());
    try {
      const downVoteThread = await api.toggleDownVoteThread(threadId);
      dispatch(toggleDownVoteThreadActionCreator(downVoteThread ?? {}));
      dispatch(asyncPopulateUsersAndThreads());
    } catch (error: any) {
      dispatch(toggleDownVoteThreadActionCreator({}));
      alert(error.message);
    }
    dispatch(hideLoading());
  };
}

function asyncToogleNeutralForUpVoteThread(threadId: string) {
  return async (dispatch: any) => {
    dispatch(showLoading());
    try {
      const upVoteThread = await api.toggleUpVoteThread(threadId);
      const neutralVoteThread = await api.toggleNeutralVoteThread(threadId);      
      dispatch(toggleNeutralForUpVoteThreadActionCreator(neutralVoteThread ?? {}, upVoteThread ?? {}));
      dispatch(asyncPopulateUsersAndThreads());
    } catch (error: any) {
      dispatch(toggleNeutralForUpVoteThreadActionCreator({}, {}));
      alert(error.message);
    }
    dispatch(hideLoading());
  };
}

function asyncToogleNeutralForDownVoteThread(threadId: string) {
  return async (dispatch: any) => {
    dispatch(showLoading());
    try {
      const downVoteThread = await api.toggleDownVoteThread(threadId);
      const neutralVoteThread = await api.toggleNeutralVoteThread(threadId);
      dispatch(toggleNeutralForDownVoteThreadActionCreator(neutralVoteThread ?? {}, downVoteThread ?? {}));
      dispatch(asyncPopulateUsersAndThreads());
    } catch (error: any) {
      dispatch(toggleNeutralForDownVoteThreadActionCreator({}, {}));
      alert(error.message);
    }
    dispatch(hideLoading());
  };
}

function asyncAddComment({ content, threadId }:{ content: string, threadId: string }) {
  return async (dispatch: any) => {
    dispatch(showLoading());
    try {
      const comment = await api.createComment({ content, threadId });
      dispatch(addCommentActionCreator(comment as CommentTypes ?? {}));
      dispatch(asyncPopulateUsersAndThreads());
    } catch (error: any) {
      dispatch(addCommentActionCreator({}));
      alert(error.message);
    }
    dispatch(hideLoading());
  };
}

function asyncToogleUpVoteComment({ threadId, commentId }:{ threadId: string, commentId: string }) {
  return async (dispatch: any) => {
    dispatch(showLoading());
    try {
      const upVoteComment = await api.toggleUpVoteComment({ threadId, commentId });      
      dispatch(toggleUpVoteCommentActionCreator(upVoteComment ?? {}));
      dispatch(asyncReceiveThreadDetail(threadId));
    } catch (error: any) {
      dispatch(toggleUpVoteCommentActionCreator({}));
      alert(error.message);
    }
    dispatch(hideLoading());
  };
}

function asyncToogleDownVoteComment({ threadId, commentId }:{ threadId: string, commentId: string }) {
  return async (dispatch: any) => {
    dispatch(showLoading());
    try {
      const downVoteComment = await api.toggleDownVoteComment({ threadId, commentId });
      dispatch(toggleDownVoteCommentActionCreator(downVoteComment ?? {}));
      dispatch(asyncReceiveThreadDetail(threadId));
    } catch (error: any) {
      dispatch(toggleDownVoteCommentActionCreator({}));
      alert(error.message);
    }
    dispatch(hideLoading());
  };
}

export {
  ActionType,
  receiveThreadDetailActionCreator,
  toggleUpVoteThreadActionCreator,
  toggleDownVoteThreadActionCreator,
  toggleNeutralForUpVoteThreadActionCreator,
  toggleNeutralForDownVoteThreadActionCreator,
  addCommentActionCreator,
  toggleUpVoteCommentActionCreator,
  toggleDownVoteCommentActionCreator,
  asyncReceiveThreadDetail,
  asyncToogleUpVoteThread,
  asyncToogleDownVoteThread,
  asyncToogleNeutralForUpVoteThread,
  asyncToogleNeutralForDownVoteThread,
  asyncAddComment,
  asyncToogleUpVoteComment,
  asyncToogleDownVoteComment,
};