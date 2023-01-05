import React, { useEffect, useState } from 'react';
import { styled, Stack, Avatar, Typography, Button } from '@mui/material';
import { useSession, signOut } from 'next-auth/react';
import { useAppSelector, useAppDispatch } from '../../../hooks/hooks';
import { asyncUnsetAuthUser } from '../../../states/authUser/action';

const ParentHorizontalOrVerticalStack = styled(Stack)(({ theme }) => ({
  flexDirection: 'row',
  gap: '10px',
  width: 'max-content',
  [theme.breakpoints.up('lg')]: {
    flexDirection: 'column',
    alignItems: 'center',
  },
    
}));

type AvatarPhotoType = { src: string };

const AvatarPhoto = ({ src }: AvatarPhotoType) => (
    <Avatar variant='medium' src={src} />
);

const ChildVerticalStack = styled(Stack)( ({ theme }) => ({
  justifyContent: 'center',
  gap: '3px',
  [theme.breakpoints.up('lg')]: {
    alignItems: 'center',
  },
}));

type TypoghraphyNameType = { name: string };

const TypoghraphyName = ({ name }: TypoghraphyNameType) => (
    <Typography variant='content-type' className='user-profile' >
        {name}
    </Typography>
);

type TypoghraphyEmailType = { email: string };

const TypoghraphyEmail = ({ email }: TypoghraphyEmailType) => (
    <Typography variant='content-type' className='user-profile' >
      {email}
    </Typography>
);

type UserType = { onSignOutEventHandler: (event: any) => void };

function User({ onSignOutEventHandler }: UserType) {
  const dispatch = useAppDispatch();
  const { authUser } = useAppSelector((state) => state);
  const session = useSession();
  const [userProfile, setUserProfile] = useState({ avatar: '', name: '', email: '' });

  useEffect(() => {
    setUserProfile({ avatar: authUser?.avatar, name: authUser?.name, email: authUser?.email });
    if (session.data !== null && authUser === null ) {
      signOut();
      dispatch(asyncUnsetAuthUser);
    }
  }, [authUser, dispatch, session.data]);

  return (
        <ParentHorizontalOrVerticalStack>
            <AvatarPhoto src={userProfile.avatar} />
            <ChildVerticalStack>
                <TypoghraphyName name={userProfile.name} />
                <TypoghraphyEmail email={userProfile.email} />
                <Button variant='logout' onClick={onSignOutEventHandler} >Logout</Button>
            </ChildVerticalStack>
        </ParentHorizontalOrVerticalStack>
  );
}

export default User;