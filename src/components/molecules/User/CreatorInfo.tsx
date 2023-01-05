import React from 'react';
import { styled, Stack, Avatar, Typography } from '@mui/material';
import TypoghraphyCreateAtDate from './TypoghraphyCreateAtDate';

const ParentHorizontalStack = styled(Stack)(({ theme }) => ({
  flexDirection: 'row',
  gap: '7px',
  width: 'max-content',
  [theme.breakpoints.up('xl')]: {
    alignItems: 'center',
  },
}));

type AvatarPhotoType = { src: string };

const AvatarPhoto = ({ src }: AvatarPhotoType) => (
    <Avatar variant='medium' src={src}>
        MD
    </Avatar>
);

const ChildVerticalStack = styled(Stack)({
  width: '132px',
  overflow: 'hidden',
  whiteSpace: 'normal',
  display: 'flex',
  textOverflow: 'ellipsis',
  justifyContent: 'center',
  gap: '3px',
});

type TypoghraphyNameType = { user: string };

const TypoghraphyName = ({ user }: TypoghraphyNameType) => (
    <Typography variant='content-type' className='user-profile' >
        {user}
    </Typography>
);

type CreatorInfoType = { user: any, createdAt: string };

function CreatorInfo({ user, createdAt }: CreatorInfoType) {
  return (
        <ParentHorizontalStack>
            <AvatarPhoto src={user?.avatar} />
            <ChildVerticalStack>
                <TypoghraphyName user={user?.name} />
                <TypoghraphyCreateAtDate createdAt={createdAt} />
            </ChildVerticalStack>
        </ParentHorizontalStack>
  );
}

export default CreatorInfo;