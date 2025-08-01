import { createAuthClient } from 'better-auth/react';
import { emailOTPClient } from 'better-auth/client/plugins';

export const { signIn, signUp, useSession, signOut, emailOtp } =
  createAuthClient({
    /** The base URL of the server (optional if you're using the same domain) */
    baseURL: 'http://localhost:3000',
    plugins: [emailOTPClient()],
  });
