'use client';

import { signIn } from '@/lib/auth-client';
import { GithubIcon, Loader2 } from 'lucide-react';
import { useTransition } from 'react';
import { toast } from 'sonner';

import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';

export default function LoginForm() {
  const [githubIsPending, startGithubTransition] = useTransition();

  async function handleGithubSignIn() {
    startGithubTransition(async () => {
      await signIn.social({
        provider: 'github',
        callbackURL: '/',
        fetchOptions: {
          onSuccess: () => {
            toast.success(
              'Successfully signed in with GitHub! You will be redirected...'
            );
          },
          onError: () => {
            toast.error('Internal server error');
          },
        },
      });
    });
  }
  return (
    <Card>
      <CardHeader>
        <CardTitle className='text-xl'>Welcome Back!</CardTitle>
        <CardDescription className='text-muted-foreground'>
          Login in with your credentials.
        </CardDescription>
      </CardHeader>
      <CardContent className='flex flex-col gap-4'>
        <Button
          onClick={handleGithubSignIn}
          className='w-full cursor-pointer'
          variant='outline'
          disabled={githubIsPending}
        >
          <GithubIcon className='size-4' />
          {githubIsPending ? (
            <>
              <Loader2 className='size-4 animate-spin' />
              <span>Signing in...</span>
            </>
          ) : (
            'Sign in with Github'
          )}
        </Button>

        <div className='relative text-center text-sm after:absolute after:inset-0 after:flex after:items-center after:top-1/2 after:z-0 after:border-t after:border-border'>
          <span className='relative z-10 bg-card px-2 text-muted-foreground'>
            Or continue with
          </span>
        </div>

        <div className='grid gap-3'>
          <div className='grid gap-2'>
            <Label htmlFor='email'>Email</Label>
            <Input type='email' id='email' placeholder='john.doe@example.com' />
          </div>
          <Button className='mt-2 cursor-pointer'>Continue with Email</Button>
        </div>
      </CardContent>
    </Card>
  );
}
