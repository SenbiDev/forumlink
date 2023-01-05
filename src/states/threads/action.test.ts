import { hideLoading, showLoading } from 'react-redux-loading-bar';
import api from '../../utils/api';
import { asyncAddThread, addThreadActionCreator } from './action';

const fakeThreadsResponse = {
  id: 'thread-1',
  title: 'Thread Pertama',
  body: 'Ini adalah thread pertama',
  category: 'General',
  createdAt: '2021-06-21T07:00:00.000Z',
  ownerId: 'users-1',
  upVotesBy: [],
  downVotesBy: [],
  totalComments: 0,
};

const fakeErrorResponse = new Error('Ups, something went wrong');

describe('asyncAddThread thunk', () => {
  beforeEach(() => {
    // backup original implementation
    api._createThread = api.createThread;
  });

  afterEach(() => {
    // restore original implementation
    api.createThread = api._createThread;

    // delete backup
    // delete api._createThread;
  });

  it('should dispatch action correctly when data fetching success', async () => {
    // arrange
    const param = {
      title: 'Thread Pertama',
      body: 'Ini adalah thread pertama',
      category: 'General',
    };
    // stub implementation
    api.createThread = () => Promise.resolve(fakeThreadsResponse);
    // mock dispatch
    const dispatch = jest.fn();

    // action
    await asyncAddThread(param)(dispatch);

    // assert
    expect(dispatch).toHaveBeenCalledWith(showLoading());
    expect(dispatch).toHaveBeenCalledWith(addThreadActionCreator(fakeThreadsResponse));
    expect(dispatch).toHaveBeenCalledWith(hideLoading());
  });

  it('should dispatch action and call alert correctly when data fetching failed', async () => {
    // arrange
    const param = {
      title: 'Thread Pertama',
      body: 'Ini adalah thread pertama',
      category: 'General',
    };
    // stub implementation
    api.createThread = () => Promise.reject(fakeErrorResponse);
    // mock dispatch
    const dispatch = jest.fn();
    // mock alert
    window.alert = jest.fn();

    // action
    await asyncAddThread(param)(dispatch);

    // assert
    expect(dispatch).toHaveBeenCalledWith(showLoading());
    expect(dispatch).toHaveBeenCalledWith(addThreadActionCreator({}));
    expect(window.alert).toHaveBeenCalledWith(fakeErrorResponse.message);
    expect(dispatch).toHaveBeenCalledWith(hideLoading());
  });
});