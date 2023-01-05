/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import '../styles/globals.css';
import { Provider } from 'react-redux';
import store from '../src/store/store';
import { ThemeProvider } from '@mui/material';
import theme from '../src/themes';
import Layout from '../src/components/molecules/Layout';
import Preload from '../src';
import type { AppProps } from 'next/app';
import type { Session } from 'next-auth';
import { SessionProvider } from 'next-auth/react';

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps<{ session: Session }>) {  
  return (
    <SessionProvider session={session}>
      <ThemeProvider theme={theme}>
        <Provider store={store}>
              <Preload>
                <Layout>
                    <Component {...pageProps} />
                </Layout>
              </Preload>
        </Provider>
      </ThemeProvider>
    </SessionProvider>
  );
}
