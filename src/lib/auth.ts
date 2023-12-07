import NextAuth, { NextAuthOptions } from 'next-auth';
import bcrypt from 'bcrypt';

// Auth Providers
import { MongoDBAdapter } from '@next-auth/mongodb-adapter';
import CredentialsProvider from 'next-auth/providers/credentials';

// DB
import dbConnect from './connectDB';
import clientPromise from './mongoclientpromise';
import User from '@/models/User';

export const authOptions: NextAuthOptions = {
  adapter: MongoDBAdapter(clientPromise),
  session: {
    strategy: 'jwt',
  },
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      id: 'credentials',
      credentials: {
        email: {
          label: 'email',
          type: 'email',
          placeholder: 'email@example.com',
        },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        await dbConnect();

        if (credentials == null) return null;

        // login Action
        try {
          const email = credentials?.email.toLowerCase();
          const user = await User.findOne({ email: email });

          if (!user) {
            throw new Error('User not found');
          }

          const isMatch = await bcrypt.compare(
            credentials?.password,
            user.password,
          );

          if (!isMatch) {
            throw new Error('Email or password is incorrect');
          }

          return {
            id: user._id.toString(),
            ...user,
          };
        } catch (err) {
          throw new Error(String(err));
        }
      },
    }),
  ],
  pages: {
    // where the user will be sent on actions
    signIn: '/admin/login',
    newUser: '/admin/cms',
    error: '/admin/login',
  },
  callbacks: {
    // This is called whenever a session is checked (We can pass additional info from the user doc).
    async jwt({ token, user }: { token: any; user: any }) {
      if (user) {
        token.user = {
          id: user.id,
          email: user.email,
        };
      }
      return token;
    },
    // If we want to access our extra user info from sessions we have to pass it the token here to get them in sync:
    session: async ({ session, token }) => {
      if (token) {
        session.user = token?.user as
          | {
              name?: string | null | undefined;
              email?: string | null | undefined;
              image?: string | null | undefined;
            }
          | undefined;
      }
      return session;
    },
  },
};

export default NextAuth(authOptions);
