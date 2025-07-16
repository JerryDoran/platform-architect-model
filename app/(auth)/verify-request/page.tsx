'use client';

import { useState, useTransition } from 'react';

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

export default function VerifyRequestPage() {
  const [otp, setOtp] = useState('');
  const [emailPending, startTransition] = useTransition();

  function handleVerifyOtp() {}

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
        <Button className='w-full cursor-pointer'>Verify Account</Button>
      </CardContent>
    </Card>
  );
}
