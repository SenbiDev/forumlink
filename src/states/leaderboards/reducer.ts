import { AnyAction } from '@reduxjs/toolkit';
import { ActionType } from './action';
import { StateType } from './reducerPropTypes';

function leaderboardsReducer(leaderboards: StateType = [], action: AnyAction) {
  switch (action.type) {
    case ActionType.RECEIVE_LEADERBOARD:
      return action.payload.leaderboards;
    default:
      return leaderboards;
  }
}

export default leaderboardsReducer;