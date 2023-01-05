import { hideLoading, showLoading } from 'react-redux-loading-bar';
import api from '../../utils/api';
import { ReceiveLeaderboardsActionType } from './actionPropTypes';

const ActionType = {
  RECEIVE_LEADERBOARD: 'RECEIVE_LEADERBOARD',
};

function receiveLeaderboardsActionCreator(leaderboards: ReceiveLeaderboardsActionType) {
  return {
    type: ActionType.RECEIVE_LEADERBOARD,
    payload: {
      leaderboards,
    },
  };
}

function asyncReceiveLeaderboards() {
  return async (dispatch: any) => {
    dispatch(showLoading());
    try {
      const leaderboards = await api.getLeaderboards();
      dispatch(receiveLeaderboardsActionCreator(leaderboards ?? []));
    } catch (error: any) {
      dispatch(receiveLeaderboardsActionCreator([]));
      alert(error.message);
    }
    dispatch(hideLoading());
  };
}

export { ActionType, receiveLeaderboardsActionCreator, asyncReceiveLeaderboards };