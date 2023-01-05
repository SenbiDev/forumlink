import { AnyAction } from '@reduxjs/toolkit';
import { ActionType } from './action';

function isPreloadReducer(isPreload = true, action: AnyAction) {
  switch (action.type) {
    case ActionType.SET_IS_PRELOAD:
      return action.payload.isPreload;
    default:
      return isPreload;
  }
}

export default isPreloadReducer;
