'use client';

import { useRouter } from 'next/navigation';
import { Chrome } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { useAuth } from '@/contexts/auth-context';
import { useEffect } from 'react';

export default function LoginPage() {
  const { login, isAuthenticated } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (isAuthenticated) {
      router.push('/scheduled');
    }
  }, [isAuthenticated, router]);
  
  const handleLogin = () => {
    login({
      name: 'John Doe',
      email: 'john.doe@example.com',
    });
    router.push('/scheduled');
  };

  return (
    <div className="flex min-h-screen w-full items-center justify-center bg-background p-4">
      <div className="w-full max-w-md space-y-6 text-center">
        <div className="flex justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-12 w-12 text-primary"
          >
            <path d="M22 2L11 13" />
            <path d="M22 2L15 22L11 13L2 9L22 2Z" />
          </svg>
        </div>
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Welcome to Outbox
          </h1>
          <p className="text-muted-foreground">
            Transforming cold outreach with our revolutionary AI-driven platform.
          </p>
        </div>
        <div className="flex flex-col items-center justify-center space-y-4">
          <Button
            onClick={handleLogin}
            className="w-full max-w-xs"
            size="lg"
          >
            <Chrome className="mr-2 h-5 w-5" />
            Sign in with Google
          </Button>
          <p className="text-xs text-muted-foreground">
            By continuing, you agree to our Terms of Service and Privacy Policy.
          </p>
        </div>
      </div>
    </div>
  );
}
