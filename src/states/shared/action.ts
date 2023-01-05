
import { Action } from '@reduxjs/toolkit';
import { hideLoading, showLoading } from 'react-redux-loading-bar';
import api from '../../utils/api';
import { receiveThreadsActionCreator } from '../threads/action';
import { receiveUsersActionCreator } from '../users/action';

function asyncPopulateUsersAndThreads() {
  return async (dispatch: (arg0: Action<any>) => void) => {
    dispatch(showLoading());
    try {
      const users = await api.getAllUsers();
      const threads = await api.getAllThreads();

      dispatch(receiveUsersActionCreator(users ?? []));
      dispatch(receiveThreadsActionCreator(threads ?? []));
    } catch (error: any) {
      dispatch(receiveUsersActionCreator([]));
      dispatch(receiveThreadsActionCreator([]));
      alert(error.message);
    }
    dispatch(hideLoading());
  };
}

export { asyncPopulateUsersAndThreads };
