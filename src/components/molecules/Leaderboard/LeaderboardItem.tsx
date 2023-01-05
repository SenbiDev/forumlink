import React from 'react';
import { styled, Container, Box, Stack, Typography, Avatar } from '@mui/material';
import { Icon } from '../../atoms';

const LeaderboardContainer = styled(Container)({
  padding: '20px',
  background: 'white',
  margin: '0 20px',
  width: 'unset',
  borderRadius: '4px',
});

const LeaderboardBox = Box;

const LeaderboardContentDirection = styled(Stack)({
  flexDirection: 'row',
  alignItems: 'center',
});

const LeaderboardContent = styled(Stack)({
  flexDirection: 'row',
  justifyContent: 'space-between',
  width: '100%',
});

const LeaderboardIndex = styled(Stack)({
  flexDirection: 'row',
  alignItems: 'center',
  gap: '10px',
});

const UserNameLeaderboard = styled(Stack)({
  flexDirection: 'row',
  alignItems: 'center',
  gap: '10px',
});

const LeaderboardScore = styled(Stack)({
  flexDirection: 'row',
  alignItems: 'center',
  gap: '4px',
});

type LeaderboardItemType = {
  index: number,
  name: string,
  score: number,
};

function LeaderboardItem({ index, name, score }: LeaderboardItemType) {
  return (
        <LeaderboardContainer maxWidth={false} disableGutters>
            <LeaderboardBox>
                <LeaderboardContentDirection>
                    <LeaderboardContent>
                        <LeaderboardIndex>
                            <Typography variant='text' className='number' >
                                #{index}
                            </Typography>
                            <UserNameLeaderboard>
                                <Avatar variant='medium' />
                                <Typography variant='content-type' className='user-profile' >
                                    {name}
                                </Typography>
                            </UserNameLeaderboard>
                        </LeaderboardIndex>
                        <LeaderboardScore>
                            <Typography variant='text' className='number' >
                                {score}
                            </Typography>
                            <Icon type='star' />
                        </LeaderboardScore>
                    </LeaderboardContent>
                </LeaderboardContentDirection>
            </LeaderboardBox>
        </LeaderboardContainer>
  );
}

export default LeaderboardItem;