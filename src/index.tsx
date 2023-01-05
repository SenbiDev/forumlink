import React, { useState, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from './hooks/hooks';
import { asyncPreloadProcess } from './states/isPreload/action';
import { asyncPopulateUsersAndThreads } from './states/shared/action';
import { asyncStoreAccessToken } from './states/token/action';
import { useSession } from 'next-auth/react';
import Loading from './components/atoms/Loading';

function Preload({ children }: { children: React.ReactNode }) {
  const [secondRender, setSecondRender] = useState(false);
  const session = useSession();
  const dispatch = useAppDispatch();
  const { isPreload } = useAppSelector((state) => state);

  useEffect(() => {
    setSecondRender(true);
    if (secondRender) {
      dispatch(asyncStoreAccessToken((session.data?.user.accessToken as string)));
      dispatch(asyncPreloadProcess());
      dispatch(asyncPopulateUsersAndThreads());
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch, session]);

  if (isPreload) {
    return null;
  }

  return (
    <div>
      <Loading />
      {children}
    </div>
  );
}


export default Preload;