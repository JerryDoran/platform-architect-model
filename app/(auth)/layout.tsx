import { buttonVariants } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className='relative flex min-h-svh flex-col items-center justify-center bg-background p-6'>
      <Link
        href='/'
        className={buttonVariants({
          variant: 'outline',
          className:
            'flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground absolute top-6 left-6',
        })}
      >
        <ArrowLeft className='size-4' />
        Back
      </Link>

      <div className='flex w-full max-w-sm flex-col gap-6'>
        <Link
          className='flex items-center self-center gap-2 text-2xl font-semibold'
          href='/'
        >
          <Image src='/globe.svg' alt='NextBase' width={32} height={32} />
          NextBase
        </Link>
        {children}
        <div className='text-center text-balance text-muted-foreground text-xs'>
          By clicking continue, you agree to our{' '}
          <span className='hover:text-primary hover:underline cursor-pointer'>
            Terms of service
          </span>{' '}
          and{' '}
          <span className='hover:text-primary hover:underline cursor-pointer'>
            Privacy Policy
          </span>
          .
        </div>
      </div>
    </div>
  );
}
