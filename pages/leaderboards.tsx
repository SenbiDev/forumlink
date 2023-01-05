import React, { useEffect } from 'react';
import { Leaderboard } from '../src/components';
import { useAppDispatch, useAppSelector } from '../src/hooks/hooks';
import { asyncReceiveLeaderboards } from '../src/states/leaderboards/action';

function LeaderboardsPage() {
  const dispatch = useAppDispatch();
  const { leaderboards } = useAppSelector((state) => state);

  useEffect(() => {
    dispatch(asyncReceiveLeaderboards());
  }, [dispatch]);

  return (
    <Leaderboard leaderboards={leaderboards} />
  );
}

export default LeaderboardsPage;
