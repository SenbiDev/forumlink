import { hideLoading, showLoading } from 'react-redux-loading-bar';
import { asyncUnsetAuthUser, unsetAuthUserActionCreator } from './action';

describe('asyncUnsetAuthUser thunk', () => {
  it('should dispatch action correctly when user Logout', async () => {
    // arrange
    const dispatch = jest.fn();
     
    // action
    await asyncUnsetAuthUser()(dispatch);
     
    // assert
    expect(dispatch).toHaveBeenCalledWith(showLoading());
    expect(dispatch).toHaveBeenCalledWith(unsetAuthUserActionCreator());
    expect(dispatch).toHaveBeenCalledWith(hideLoading());
  });
});