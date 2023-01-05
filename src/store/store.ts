import { configureStore } from '@reduxjs/toolkit';
import { loadingBarReducer } from 'react-redux-loading-bar';
import authUserReducer from '../states/authUser/reducer';
import isPreloadReducer from '../states/isPreload/reducer';
import leaderboardsReducer from '../states/leaderboards/reducer';
import threadDetailReducer from '../states/threadDetail/reducer';
import threadsReducer from '../states/threads/reducer';
import usersReducer from '../states/users/reducer';

const store = configureStore({
  reducer: {
    authUser: authUserReducer,
    isPreload: isPreloadReducer,
    users: usersReducer,
    threads: threadsReducer,
    threadDetail: threadDetailReducer,
    leaderboards: leaderboardsReducer,
    loadingBar: loadingBarReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;