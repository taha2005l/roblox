import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import RobuxCoin from './RobuxCoin';
import { cn } from '@/lib/utils';
import { Star, Flame, Sparkles } from 'lucide-react';
import RewardsDialog from './RewardsDialog';

interface PackageCardProps {
  title: string;
  amount: number;
  oldPrice?: number;
  price?: number;
  popular?: boolean;
  bestValue?: boolean;
  color?: 'purple' | 'blue' | 'green' | 'yellow';
}

const PackageCard: React.FC<PackageCardProps> = ({
  title,
  amount,
  oldPrice,
  price,
  popular = false,
  bestValue = false,
  color = 'purple'
}) => {
  const [showRewards, setShowRewards] = useState(false);

  const colorClasses = {
    purple: 'from-robux-purple/20 to-robux-purple/5 hover:shadow-robux-purple/30',
    blue: 'from-robux-blue/20 to-robux-blue/5 hover:shadow-robux-blue/30',
    green: 'from-robux-green/20 to-robux-green/5 hover:shadow-robux-green/30',
    yellow: 'from-robux-yellow/20 to-robux-yellow/5 hover:shadow-robux-yellow/30',
  };
  
  const buttonColorClasses = {
    purple: 'border-robux-purple/50 hover:bg-robux-purple/20 hover:border-robux-purple',
    blue: 'border-robux-blue/50 hover:bg-robux-blue/20 hover:border-robux-blue',
    green: 'border-robux-green/50 hover:bg-robux-green/20 hover:border-robux-green',
    yellow: 'border-robux-yellow/50 hover:bg-robux-yellow/20 hover:border-robux-yellow',
  };
  
  const neonTextClass = `neon-${color}`;
  
  return (
    <>
      <Card className={cn(
        'bg-gradient-to-b p-4 sm:p-6 border border-white/10 rounded-xl card-hover transition-all duration-300 hover:shadow-lg transform hover:scale-[1.02] sm:hover:scale-105 active:scale-100',
        colorClasses[color]
      )}>
        {(popular || bestValue) && (
          <div className={cn(
            'absolute -top-2 sm:-top-3 left-1/2 -translate-x-1/2 py-0.5 sm:py-1 px-3 sm:px-4 rounded-full text-xs sm:text-sm font-bold shadow-lg',
            popular ? 'bg-robux-purple text-white' : 'bg-robux-green text-white'
          )}>
            {popular && (
              <div className="flex items-center gap-1">
                <Star className="h-3 w-3 sm:h-3.5 sm:w-3.5 text-yellow-300" /> Popular
              </div>
            )}
            {bestValue && (
              <div className="flex items-center gap-1">
                <Flame className="h-3 w-3 sm:h-3.5 sm:w-3.5 text-orange-300" /> Best Value
              </div>
            )}
          </div>
        )}
        
        <div className="flex justify-center mb-3 sm:mb-4">
          <RobuxCoin size="lg" className="mt-2" />
        </div>
        
        <h3 className="text-lg sm:text-xl font-bold text-center mb-1 sm:mb-2">{title}</h3>
        
        <div className="text-center mb-3 sm:mb-4">
          <span className={cn('text-2xl sm:text-3xl font-bold', neonTextClass)}>{amount.toLocaleString()}</span>
          <span className="text-gray-400 block text-sm sm:text-base">Robux</span>
        </div>
        
        {(price || oldPrice) && (
          <div className="flex items-center justify-center gap-2 mb-3 sm:mb-4">
            {oldPrice && (
              <span className="text-gray-400 line-through text-sm sm:text-base">${oldPrice.toFixed(2)}</span>
            )}
            {price && (
              <span className="text-white font-bold text-base sm:text-lg">${price.toFixed(2)}</span>
            )}
            {oldPrice && price && (
              <span className="bg-robux-green/20 text-green-400 text-xs font-bold px-2 py-0.5 rounded-full">
                Save {Math.round(((oldPrice - price) / oldPrice) * 100)}%
              </span>
            )}
          </div>
        )}
        
        <Button 
          variant="outline" 
          className={cn(
            "w-full text-white transition-all duration-300 group overflow-hidden relative text-sm sm:text-base h-9 sm:h-10",
            buttonColorClasses[color]
          )}
          onClick={() => setShowRewards(true)}
        >
          <span className="relative z-10 flex items-center justify-center">
            Get Free
            <Sparkles className="h-3.5 w-3.5 sm:h-4 sm:w-4 ml-1.5 sm:ml-2 animate-pulse" />
          </span>
          <span className={cn(
            "absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity -z-10",
            popular ? "bg-robux-purple/20" : bestValue ? "bg-robux-green/20" : `bg-robux-${color}/20`
          )}></span>
        </Button>
      </Card>

      <RewardsDialog 
        open={showRewards} 
        onOpenChange={setShowRewards}
      />
    </>
  );
};

export default PackageCard;
