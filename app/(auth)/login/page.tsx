import { auth } from '@/lib/auth';
import { headers } from 'next/headers';
import LoginForm from './_components/login-form';
import { redirect } from 'next/navigation';

export default async function LoginPage() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (session) {
    // If the user is already logged in, redirect them to the home page
    return redirect('/'); 
  }

  return <LoginForm />;
}
