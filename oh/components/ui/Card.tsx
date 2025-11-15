import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  glass?: boolean;
}

export default function Card({ children, className, hover = false, glass = false }: CardProps) {
  return (
    <div
      className={cn(
        'bg-white rounded-md shadow-md p-6 transition-all duration-300',
        hover && 'hover:shadow-xl hover:-translate-y-1',
        glass && 'glass bg-white/10 backdrop-blur-lg',
        className
      )}
    >
      {children}
    </div>
  );
}

