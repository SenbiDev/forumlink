import { hideLoading, showLoading } from 'react-redux-loading-bar';
import api from '../../utils/api';
import { asyncPreloadProcess } from './action';
import { setAuthUserActionCreator } from '../authUser/action';

const fakeauthUserResponse = {
  id: 'john_doe',
  name: 'John Doe',
  email: 'john@example.com',
  avatar: 'https://generated-image-url.jpg',
};

const fakeErrorResponse = null;

describe('asyncPreloadProcess thunk', () => {
  beforeEach(() => {
    // backup original implementation
    api._getOwnProfile = api.getOwnProfile;
  });
     
  afterEach(() => {
    // restore original implementation
    api.getOwnProfile = api._getOwnProfile;
  });

  it('should dispatch action correctly when data fetching success', async () => {
    // arrange
    // stub implementation
    api.getOwnProfile = () => Promise.resolve(fakeauthUserResponse);
    // mock dispatch
    const dispatch = jest.fn();
 
    // action
    await asyncPreloadProcess()(dispatch);
 
    // assert
    expect(dispatch).toHaveBeenCalledWith(showLoading());
    expect(dispatch).toHaveBeenCalledWith(setAuthUserActionCreator(fakeauthUserResponse));
    expect(dispatch).toHaveBeenCalledWith(hideLoading());
  });

  it('should dispatch action and return null correctly when data fetching failed', async () => {
    // arrange
    // stub implementation
    api.getOwnProfile = () => Promise.reject(fakeErrorResponse);
    // mock dispatch
    const dispatch = jest.fn();
 
    // action
    await asyncPreloadProcess()(dispatch);
 
    // assert
    expect(dispatch).toHaveBeenCalledWith(showLoading());
    expect(dispatch).toHaveBeenCalledWith(setAuthUserActionCreator(fakeErrorResponse));
    expect(dispatch).toHaveBeenCalledWith(hideLoading());
  });
});