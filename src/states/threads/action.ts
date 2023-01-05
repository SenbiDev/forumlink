import { hideLoading, showLoading } from 'react-redux-loading-bar';
import api from '../../utils/api';
import { 
  ReceiveThreadsActionType,
  AddThreadActionType,
  AsyncAddThreadType,
} from './actionPropTypes';

const ActionType = {
  RECEIVE_THREADS: 'RECEIVE_THREADS',
  ADD_THREAD: 'ADD_THREAD',
};

function receiveThreadsActionCreator(threads: ReceiveThreadsActionType) {
  return {
    type: ActionType.RECEIVE_THREADS,
    payload: {
      threads,
    },
  };
}

function addThreadActionCreator(thread: AddThreadActionType) {
  return {
    type: ActionType.ADD_THREAD,
    payload: {
      thread,
    },
  };
}

function asyncAddThread({ title, body, category = '' }: AsyncAddThreadType) {
  return async (dispatch: any) => {
    dispatch(showLoading());
    try {
      const thread = await api.createThread({ title, body, category });
      dispatch(addThreadActionCreator(thread ?? {}));
    } catch (error: any) {
      dispatch(addThreadActionCreator({}));
      alert(error.message);
    }
    dispatch(hideLoading());
  };
}

export {
  ActionType,
  receiveThreadsActionCreator,
  addThreadActionCreator,
  asyncAddThread,
};
