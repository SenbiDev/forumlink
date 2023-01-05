import React from 'react';
import { StateType } from '../../../states/authUser/reducerPropTypes';
import AuthNavigation from './AuthNavigation';
import PageNavigation from './PageNavigation';

type NavBarType = { authUser: StateType | boolean };

function NavBar({ authUser }: NavBarType) {
  return (
    <>
        { authUser ? <PageNavigation /> : <AuthNavigation /> }
    </>
  );
}

export default NavBar;