'use client';

import { useState, useTransition } from 'react';
import { signIn } from '@/lib/auth-client';
import { useRouter, useSearchParams } from 'next/navigation';

import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from '@/components/ui/input-otp';
import { toast } from 'sonner';
import { Loader2 } from 'lucide-react';

export default function VerifyRequestPage() {
  const router = useRouter();
  const [otp, setOtp] = useState('');
  const [emailPending, startTransition] = useTransition();
  const params = useSearchParams();
  const email = params.get('email') as string;

  const isOtpCompleted = otp.length === 6;

  function handleVerifyOtp() {
    startTransition(async () => {
      await signIn.emailOtp({
        email: email,
        otp: otp,
        fetchOptions: {
          onSuccess: () => {
            toast.success('Email verified! You will be redirected...');
            router.push('/');
          },
          onError: () => {
            toast.error('Email verification failed!');
          },
        },
      });
    });
  }

  return (
    <Card className='w-full mx-auto'>
      <CardHeader className='text-center'>
        <CardTitle className='text-xl'>Please check your email</CardTitle>
        <CardDescription>
          We have sent a verification code to your email. Please enter it below.
        </CardDescription>
      </CardHeader>
      <CardContent className='space-y-6'>
        <div className='flex flex-col items-center space-y-2'>
          <InputOTP
            maxLength={6}
            className='gap-2'
            value={otp}
            onChange={(value) => setOtp(value)}
          >
            <InputOTPGroup>
              <InputOTPSlot index={0} />
              <InputOTPSlot index={1} />
              <InputOTPSlot index={2} />
            </InputOTPGroup>
            <InputOTPSeparator />
            <InputOTPGroup>
              <InputOTPSlot index={3} />
              <InputOTPSlot index={4} />
              <InputOTPSlot index={5} />
            </InputOTPGroup>
          </InputOTP>
          <p className='text-sm text-muted-foreground'>
            Enter the 6-digit code from your email
          </p>
        </div>
        <Button
          onClick={handleVerifyOtp}
          disabled={emailPending || !isOtpCompleted}
          className='w-full cursor-pointer'
        >
          {emailPending ? (
            <>
              <Loader2 className='size-4 animate-spin' />
              <span>Verifying...</span>
            </>
          ) : (
            'Verify Account'
          )}
        </Button>
      </CardContent>
    </Card>
  );
}
