import { buttonVariants } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ArrowLeft } from 'lucide-react';
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

      <div className='flex w-full max-w-sm flex-col gap-6'>{children}</div>
    </div>
  );
}
