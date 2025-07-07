import { auth } from '@/lib/auth';
import { headers } from 'next/headers';

import { ThemeToggle } from '@/components/theme-toggle';
import { Button } from '@/components/ui/button';

export default async function Home() {
  // Fetch the session from the auth API which is on the server side
  // This is a server component, so we can directly call the auth API
  // and get the session without needing to use a client-side hook.
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  return (
    <div className='p-8'>
      <h1 className=''>Home Page</h1>
      <ThemeToggle />
      {session ? (
        <div>
          <p>Welcome, {session.user.name}!</p>
          <p>Email: {session.user.email}</p>
        </div>
      ) : (
        <Button>Login</Button>
      )}
    </div>
  );
}
