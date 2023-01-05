import React from 'react';
import UpVoteIconButton from './UpVoteIconButton';
import DownVoteIconButton from './DownVoteIconButton';
import CloseIconButton from './CloseIconButton';

type IconButtonType = { 
  type: 'up-vote' | 'down-vote' | 'close',
  isUpVoteClicked?: boolean,
  isDownVoteClicked?: boolean,
  onClick: () => void,
};

function IconButton({ type, isUpVoteClicked, isDownVoteClicked, onClick }: IconButtonType) {
  return (
    <>
        { type === 'up-vote' && <UpVoteIconButton isUpVoteClicked={isUpVoteClicked} onClick={onClick} /> }
        { type === 'down-vote' && <DownVoteIconButton isDownVoteClicked={isDownVoteClicked} onClick={onClick} /> }
        { type === 'close' && <CloseIconButton onClick={onClick} /> }
    </>
  );
}

export default IconButton;