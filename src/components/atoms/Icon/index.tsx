import React from 'react';
import CommentIcon from './CommentIcon';
import DownVoteIcon from './DownVoteIcon';
import StarIcon from './StarIcon';
import UpVoteIcon from './UpVoteIcon';
 
type IconType = { type: 'up-vote' | 'down-vote' | 'comment' | 'star' };

function Icon({ type }: IconType) {
  return (
    <>
        { type === 'up-vote' && <UpVoteIcon /> }
        { type === 'down-vote' && <DownVoteIcon /> }
        { type === 'comment' && <CommentIcon /> }
        { type === 'star' && <StarIcon /> }
    </>
  );
}

export default Icon;