import React, { useEffect, useState } from 'react';
import { Threads } from '../src/components';
import { ScrollButton } from '../src/components';
import ThreadForm from '../src/components/molecules/Threads/ThreadForm';
import { useAppDispatch, useAppSelector } from '../src/hooks/hooks';
import { asyncUnsetAuthUser } from '../src/states/authUser/action';
import { signOut } from 'next-auth/react';
import { useRouter } from 'next/router';

function ThreadsPage() {
  const { push, asPath } = useRouter();
  const dispatch = useAppDispatch();
  const { threads, users } = useAppSelector((state) => state);
  const [threadList, setThreadList] = useState([]);

  const pathSplit = asPath.split('=');
  const categoryParam = pathSplit.slice(1).join('').replace(/%20/g, ' ') || 'all thread';

  const categoryFilter = (threads: never[], categoryName: string) => {
    if (categoryName === 'all thread') {
      return threads;
    }

    return threads.filter(({ category }: any) => category === categoryName);
  };

  useEffect(() => {
    setThreadList(categoryFilter(threads, categoryParam));
  }, [categoryParam, threads]);

  const [open, setOpen] = React.useState(false);

  const onModalCloseEventHandler = () => {
    setOpen(false);
  };

  const onModalToggleEventHandler = () => {
    setOpen(!open);
  };

  const onSelectDetailThreadEventHandler = (id: string) => {
    push({
      pathname: '/threads/[threadId]',
      query: { threadId: id },
    });
  };

  const onSignOutEventHandler = (event: Event) => {
    event.preventDefault();
    dispatch(asyncUnsetAuthUser());
    signOut();
  };

  return (
        <>
            <Threads users={users} threads={threadList} onSelectDetailThreadEventHandler={onSelectDetailThreadEventHandler} onSignOutEventHandler={onSignOutEventHandler} onModalToggleEventHandler={onModalToggleEventHandler} />
            <ThreadForm open={open} onModalCloseEventHandler={onModalCloseEventHandler} />
            <ScrollButton showBelow={300} />
        </>
  );
}

export default ThreadsPage;