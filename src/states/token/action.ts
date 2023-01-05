/* eslint-disable @typescript-eslint/require-await */
import api from '../../utils/api';
import { hideLoading, showLoading } from 'react-redux-loading-bar';
import { Action } from '@reduxjs/toolkit';


function asyncStoreAccessToken(token?: string) {
  return async (dispatch: (arg0: Action<any>) => void) => {
    dispatch(showLoading());
    try {        
      api.putAccessToken(token ?? '');
    } catch (error: any) {
      api.putAccessToken('');
      alert(error.message);
    }
    dispatch(hideLoading());
  };
}

export {
  asyncStoreAccessToken,
};