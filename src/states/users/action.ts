import { Action } from '@reduxjs/toolkit';
import { hideLoading, showLoading } from 'react-redux-loading-bar';
import api from '../../utils/api';
import { ReceiveUsersActionParam, AsyncRegisterUserParam } from './actionPropTypes';

const ActionType = {
  RECEIVE_USERS: 'RECEIVE_USERS',
};

function receiveUsersActionCreator(users: ReceiveUsersActionParam) {
  return {
    type: ActionType.RECEIVE_USERS,
    payload: {
      users,
    },
  };
}

function asyncRegisterUser({ name, email, password }: AsyncRegisterUserParam) {
  return async (dispatch: (arg0: Action<any>) => void) => {
    dispatch(showLoading());
    try {
      await api.register({ name: (name as string), email: (email as string), password: (password as string) });
    } catch (error: any) {
      alert(error.message);
    }
    dispatch(hideLoading());
  };
}

export {
  ActionType,
  receiveUsersActionCreator,
  asyncRegisterUser,
};
