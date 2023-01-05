import { AnyAction } from '@reduxjs/toolkit';
import { ActionType } from './action';
import { StateType } from './reducerPropTypes';

function authUserReducer(authUser: StateType = null, action: AnyAction) {
  switch (action.type) {
    case ActionType.SET_AUTH_USER:
      return action.payload.authUser;
    case ActionType.UNSET_AUTH_USER:
      return null;
    default:
      return authUser;
  }
}

export default authUserReducer;
