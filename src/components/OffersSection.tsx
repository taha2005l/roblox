import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Activity } from 'lucide-react';
import RewardsDialog from './RewardsDialog';

const OffersSection: React.FC = () => {
  const [showRewardsDialog, setShowRewardsDialog] = useState(false);
  const [currentActivity, setCurrentActivity] = useState(0);
  
  const liveActivities = [
    "Alex from USA just earned 800 Robux! 🎉",
    "Maria from Brazil completed a task for 500 Robux! ✨",
    "John from Canada just got verified! 🌟",
    "Emma from UK earned 1000 Robux! 💎",
  ];
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentActivity(prev => (prev + 1) % liveActivities.length);
    }, 3000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="offers" className="py-12 sm:py-16 px-4 bg-robux-darkBg relative">
      <div className="container mx-auto text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 sm:mb-8 neon-green">
          Earn Free <span className="neon-yellow">Robux</span> Now!
        </h2>
        
        <Button 
          onClick={() => setShowRewardsDialog(true)}
          className="bg-gradient-to-r from-emerald-500 to-emerald-700 hover:from-emerald-600 hover:to-emerald-800 text-white px-6 sm:px-10 py-6 sm:py-8 text-lg sm:text-xl font-bold rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 animate-pulse mb-8 sm:mb-12"
        >
          Get Free Robux Now!
        </Button>
        
        {/* Live Activity Banner */}
        <div className="max-w-3xl mx-auto bg-gradient-to-r from-black/40 via-purple-900/20 to-black/40 rounded-lg p-3 sm:p-4 border border-white/10 overflow-hidden relative">
          <div className="flex items-center">
            <Activity className="h-4 w-4 sm:h-5 sm:w-5 text-green-400 mr-1.5 sm:mr-2 animate-pulse" />
            <span className="text-green-400 font-bold mr-2 sm:mr-3 text-sm sm:text-base">LIVE</span>
            <div className="overflow-hidden h-5 sm:h-6 flex-1">
              <p 
                className="text-sm sm:text-base text-white whitespace-nowrap animate-slide-in-right"
                key={currentActivity}
              >
                {liveActivities[currentActivity]}
              </p>
            </div>
          </div>
        </div>
        
        {/* Dialogs */}
        <RewardsDialog 
          open={showRewardsDialog} 
          onOpenChange={setShowRewardsDialog} 
        />
      </div>
    </section>
  );
};

export default OffersSection; 