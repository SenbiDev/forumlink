import { AnyAction } from '@reduxjs/toolkit';
import { ActionType } from './action';
import { StateType } from './reducerPropTypes';


function threadsReducer(threads: StateType = [], action: AnyAction) {
  switch (action.type) {
    case ActionType.RECEIVE_THREADS:
      return action.payload.threads;
    case ActionType.ADD_THREAD:
      return [action.payload.thread, ...threads];
    default:
      return threads;
  }
}

export default threadsReducer;
