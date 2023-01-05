/* eslint-disable @typescript-eslint/require-await */
import { Action } from '@reduxjs/toolkit';
import { hideLoading, showLoading } from 'react-redux-loading-bar';
import api from '../../utils/api';
import { SetAuthUserActionParam } from './actionPropTypes';

const ActionType = {
  SET_AUTH_USER: 'SET_AUTH_USER',
  UNSET_AUTH_USER: 'UNSET_AUTH_USER',
};

function setAuthUserActionCreator(authUser: SetAuthUserActionParam) {
  return {
    type: ActionType.SET_AUTH_USER,
    payload: {
      authUser,
    },
  };
}

function unsetAuthUserActionCreator() {
  return {
    type: ActionType.UNSET_AUTH_USER,
  };
}

function asyncSetAuthUser() { // berhubungan dengan aksi submit form untuk dikelola oleh nextauth
  return async (dispatch: (arg0: Action<any>) => void) => {
    dispatch(showLoading());
    dispatch(hideLoading());
  };
}

function asyncUnsetAuthUser() {
  return (dispatch: (arg0: Action<any>) => void) => {
    dispatch(showLoading());
    dispatch(unsetAuthUserActionCreator());
    api.putAccessToken('');
    dispatch(hideLoading());
  };
}

export {
  ActionType,
  setAuthUserActionCreator,
  unsetAuthUserActionCreator,
  asyncSetAuthUser,
  asyncUnsetAuthUser,
};
