import React from 'react';
import { useRouter } from 'next/router';
import Footer from '../Footer';
import NavBar from '../NavBar';
import { useAppSelector } from '../../../hooks/hooks';

type LayoutType = { children: React.ReactNode };

function Layout({ children }: LayoutType) {
  const router = useRouter();
  const { authUser } = useAppSelector((state) =>  state);

  return (
    <div className='next-container'>
      {
        router.asPath.includes('login') || router.asPath.includes('register')
          ?
          <main className='main-container'>
            {children}
          </main>
          :
          <>
            <NavBar authUser={authUser} />
            <main className='main-container'>
              {children}
            </main>
            <Footer />
          </>
      }
  
    </div>
  );
}

export default Layout;