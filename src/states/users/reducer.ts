import { AnyAction } from '@reduxjs/toolkit';
import { ActionType } from './action';
import { StateType } from './reducerPropTypes';

function usersReducer(users: StateType  = [], action: AnyAction) {
  switch (action.type) {
    case ActionType.RECEIVE_USERS:
      return action.payload.users;
    default:
      return users;
  }
}

export default usersReducer;
