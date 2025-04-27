
import React from 'react';
import { cn } from '@/lib/utils';

interface RobuxCoinProps {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

const RobuxCoin: React.FC<RobuxCoinProps> = ({ 
  size = 'md',
  className
}) => {
  const sizeClasses = {
    sm: 'w-5 h-5 text-xs',
    md: 'w-8 h-8 text-sm',
    lg: 'w-12 h-12 text-lg'
  };
  
  return (
    <div className={cn(
      'bg-gradient-to-br from-robux-yellow to-yellow-600 rounded-full flex items-center justify-center animate-float',
      sizeClasses[size],
      className
    )}>
      <span className="font-bold">R$</span>
    </div>
  );
};

export default RobuxCoin;
