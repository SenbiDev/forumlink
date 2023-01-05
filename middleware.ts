import { withAuth } from 'next-auth/middleware';

export default withAuth({
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: '/login',
  },
  callbacks: {
    authorized({ req, token }) {
      if (req.nextUrl.pathname === '/threads' || req.nextUrl.pathname === '/threads/:path*' || req.nextUrl.pathname === '/leaderboards') {
        return token?.userRole === 'member';
      }

      return !!token;
    },
  },
});

export const config = { matcher: ['/threads', '/threads/:path*', '/leaderboards'] };