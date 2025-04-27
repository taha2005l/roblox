import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Check, Download, ShieldCheck, PartyPopper, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';
import RobuxCoin from './RobuxCoin';
import RewardsDialog from './RewardsDialog';
import LiveActivityFeed from './LiveActivityFeed';

const RewardsSection: React.FC = () => {
  const [showRewardsDialog, setShowRewardsDialog] = useState(false);

  const steps = [
    {
      title: "Select an Offer",
      description: "Browse our list of available tasks and select one that interests you.",
      icon: Award,
      color: "bg-blue-500/20 text-blue-400"
    },
    {
      title: "Complete the Task",
      description: "Follow the instructions to complete the task fully.",
      icon: Download,
      color: "bg-purple-500/20 text-purple-400"
    },
    {
      title: "Get Verified",
      description: "Once completed, your task will be verified by our system.",
      icon: ShieldCheck,
      color: "bg-emerald-500/20 text-emerald-400"
    },
    {
      title: "Receive Your Robux",
      description: "After verification, Robux will be credited to your account.",
      icon: PartyPopper,
      color: "bg-yellow-500/20 text-yellow-400"
    }
  ];

  return (
    <section id="rewards" className="py-12 sm:py-16 px-4 bg-robux-darkBg relative lazy-section">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-6 sm:mb-8">
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-extrabold mb-2 sm:mb-4 neon-green">
            Get Free <span className="neon-yellow">Robux</span> Rewards
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto text-sm sm:text-base">
            Complete simple tasks and earn free Robux! It's easy, fast, and completely free to start.
          </p>
        </div>
        
        <div className="text-center mb-8 sm:mb-12">
          <Button 
            onClick={() => setShowRewardsDialog(true)}
            className="bg-gradient-to-r from-emerald-500 to-emerald-700 hover:from-emerald-600 hover:to-emerald-800 text-white px-6 sm:px-10 py-6 sm:py-8 text-lg sm:text-xl font-bold rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 animate-pulse relative group overflow-hidden fast-tap"
          >
            <span className="relative z-10">Get Free Robux Now!</span>
            <span className="absolute inset-0 bg-emerald-400/20 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
          </Button>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <h3 className="text-xl sm:text-2xl font-bold mb-6 sm:mb-8 text-white text-center">How It Works</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            {steps.map((step, index) => (
              <Card key={index} className="bg-robux-bg border border-white/10 hover:border-white/30 p-4 sm:p-6 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/5">
                <div className="flex gap-3 sm:gap-4">
                  <div className={`flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-full ${step.color} flex items-center justify-center`}>
                    <div className="relative">
                      <span className="absolute -top-1 -left-1 bg-robux-darkBg text-white text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center">
                        {index + 1}
                      </span>
                      <step.icon className="h-5 w-5 sm:h-6 sm:w-6" />
                    </div>
                  </div>
                  <div>
                    <h4 className="text-base sm:text-lg font-semibold text-white">{step.title}</h4>
                    <p className="text-sm text-gray-400">{step.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
        
        <div className="mt-12 sm:mt-16 grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          <div className="content-visibility-auto">
            <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-center text-white">Video Tutorial</h3>
            <div className="video-container bg-robux-bg border border-white/10 rounded-xl overflow-hidden neon-border h-full">
              <div className="absolute inset-0 flex items-center justify-center bg-robux-darkBg/60">
                <p className="text-base sm:text-lg text-white text-center px-4">
                  Watch our tutorial to learn how to earn and redeem free Robux rewards
                  <br/>
                  <span className="text-xs sm:text-sm text-gray-400 mt-2 block">
                    Video would be embedded here in a real application
                  </span>
                </p>
              </div>
            </div>
          </div>
          
          <div className="content-visibility-auto">
            <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-center text-white">Live Activity <span className="text-yellow-400">✨</span></h3>
            <div className="bg-black/20 border border-white/5 rounded-xl p-4 sm:p-6 max-h-[350px] overflow-hidden">
              <LiveActivityFeed />
            </div>
          </div>
        </div>
        
        <RewardsDialog 
          open={showRewardsDialog} 
          onOpenChange={setShowRewardsDialog} 
        />
      </div>
    </section>
  );
};

export default RewardsSection;
