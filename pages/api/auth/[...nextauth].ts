/* eslint-disable @typescript-eslint/require-await */
import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import process from 'process';

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: 'email', type: 'email' },
        password: { label: 'password', type: 'password' },
      },
      async authorize(credentials) {
        const res = await fetch('https://forum-api.dicoding.dev/v1/login', {
          method: 'POST',
          body: JSON.stringify({
            email: credentials?.email,
            password: credentials?.password,
          }),
          headers: { 'Content-Type': 'application/json' },
        });

        const user = await res.json();
        
        // If no error and we have user data, return it
        if (res.ok && user) {
          return user;
        }
        // Return null if user data could not be retrieved\rules\require-await
        return null;
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: '/login',
  },
  callbacks: {
    async jwt({ token, user, account }: any) {
      if (account && user) {
        return {
          ...token,
          userRole: 'member',
          accessToken: user.data.token,
        };
      }
      token.userRole = 'member';
      return token;
    },
    async session({ session, token }: any) {
      // Send properties to the client, like an access_token and user id from a provider.
      session.user.accessToken = token.accessToken;
      return session;
    },
  },
};

export default NextAuth(authOptions);