'use client';
import { Button } from '../components/ui/Button';
import { useRouter } from 'next/navigation';


export default function NotFound() {
  const router = useRouter();
  return (
    <div className="min-h-screen flex items-center justify-center bg-white-off">
      <div className="text-center px-4">
        <h1 className="text-6xl md:text-8xl font-display font-bold text-primary mb-4">
          404
        </h1>
        <h2 className="text-2xl md:text-3xl font-display font-semibold text-text-dark mb-4">
          Page Not Found
        </h2>
        <p className="text-text-light text-lg mb-8 max-w-md mx-auto">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button onClick={() => router.push('/')} variant="default" size="lg">
            Go Home
          </Button>
          <Button onClick={() => router.push('/Services')} variant="outline" size="lg">
            View Services
          </Button>
        </div>
      </div>
    </div>
  );
}

