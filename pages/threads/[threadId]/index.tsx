import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useAppDispatch, useAppSelector } from '../../../src/hooks/hooks';
import ThreadDetail from '../../../src/components/molecules/ThreadDetail';
import ScrollButton from '../../../src/components/atoms/ScrollButton';
import { asyncReceiveThreadDetail } from '../../../src/states/threadDetail/action';

function ThreadDetailPage() {
  const dispatch = useAppDispatch();
  const { threadId } = useRouter().query;    
  const { authUser, threadDetail } = useAppSelector((state) => state);

  useEffect(() => {
    dispatch(asyncReceiveThreadDetail((threadId as string)));
  }, [dispatch, threadId]);
    
  return (
        <>
            <ThreadDetail ownProfile={authUser} threadDetail={threadDetail} />
            <ScrollButton showBelow={300} />
        </>
  );
}

export default ThreadDetailPage;