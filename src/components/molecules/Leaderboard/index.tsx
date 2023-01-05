import React from 'react';
import { styled, Stack } from '@mui/material';
import LeaderboardItem from './LeaderboardItem';

const LeaderboardLayout = styled(Stack)(({ theme }) => ({
  minHeight: '600px',
  [theme.breakpoints.up('xl')]: {
    alignItems: 'center',
    width: '-webkit-fill-available',
    minHeight: '670px',
  },
}));

const LeaderboardWrapper = styled(Stack)(({ theme }) => ({
  padding: '20px 0',
  margin: '20px',
  gap: 20,
  background: 'rgba(251, 251, 251, 0.4)',
  backdropFilter: 'blur(25px)',
  borderRadius: 4,
  // maxWidth: '1310px',
  [theme.breakpoints.up('xl')]: {
    width: '-webkit-fill-available',
  },
}));

type LeaderboardType = { leaderboards: [] };

function Leaderboard({ leaderboards }: LeaderboardType) {
  return (
        <LeaderboardLayout>
            <LeaderboardWrapper>
                {
                    leaderboards?.map(({ user: { name }, score }, index: number) => (
                        <>
                            <LeaderboardItem key={`key-${index}`} index={++index} name={name} score={score} />
                        </>
                    ))
                }
            </LeaderboardWrapper>
        </LeaderboardLayout>
  );
}

export default Leaderboard;