'use client';

import { ThemeToggle } from '@/components/theme-toggle';
import { Button } from '@/components/ui/button';
import { signOut, useSession } from '@/lib/auth-client';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';

export default function Home() {
  const { data: session } = useSession();
  const router = useRouter();

  async function handleSignOut() {
    await signOut({
      fetchOptions: {
        onSuccess: () => {
          router.push('/');
          toast.success('Successfully signed out!');
        },
      },
    });
  }

  return (
    <div className='p-8'>
      <h1 className=''>Home Page</h1>
      <ThemeToggle />
      {session ? (
        <div>
          <p>Welcome, {session.user.name}!</p>
          <p>Email: {session.user.email}</p>
          <Button onClick={handleSignOut} className='cursor-pointer'>
            Logout
          </Button>
        </div>
      ) : (
        <Button>Login</Button>
      )}
    </div>
  );
}
