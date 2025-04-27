import React, { useState, useEffect } from 'react';
import { AlertTriangle } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface RewardsDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

// Declare the content locker function types to avoid TypeScript errors
declare global {
  interface Window {
    _CJ: () => void;
    _GK: () => void;
    KMGxU_Hwp_gaqehc: {
      it: number;
      key: string;
    };
    OyWAc_qFg_LZSFoc: {
      it: number;
      key: string;
    };
  }
}

const RewardsDialog: React.FC<RewardsDialogProps> = ({ open, onOpenChange }) => {
  const [username, setUsername] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  // Load the content locker script when the component mounts
  useEffect(() => {
    // Set global variable for the new content locker
    window.OyWAc_qFg_LZSFoc = { it: 4478933, key: "4fdc9" };
    
    // Create and inject the script
    const script = document.createElement('script');
    script.src = "https://d2v7l2267atlz5.cloudfront.net/9aa5008.js";
    script.async = true;
    script.type = "text/javascript";
    document.body.appendChild(script);
    
    // Clean up
    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);
  
  const recommendedTasks = [
    {
      title: "MONEY CASH",
      description: "Install MONEY CASH app and receive 300 Robux",
      robux: 300
    },
    {
      title: "Mistplay",
      description: "Download Mistplay and earn 250 Robux instantly",
      robux: 250
    },
    {
      title: "PLAYTIME",
      description: "Install PLAYTIME app and get 200 Robux reward",
      robux: 200
    },
    {
      title: "TikTok",
      description: "Install TikTok and earn 150 Robux in your account",
      robux: 150
    }
  ];

  const handleStartNow = () => {
    if (!username.trim()) {
      alert("Please enter your Roblox username");
      return;
    }
    
    setIsSubmitting(true);
    
    // Trigger the new content locker
    if (window._GK) {
      window._GK();
    } else {
      // Fallback if _GK isn't loaded yet
      setTimeout(() => {
        if (window._GK) {
          window._GK();
        } else {
          alert("Verification system is loading. Please try again in a moment.");
        }
        setIsSubmitting(false);
      }, 1500);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="bg-robux-darkBg border-robux-purple/20 max-w-[95vw] sm:max-w-md max-h-[95vh] overflow-y-auto mx-auto rounded-xl">
        <button 
          className="absolute right-3 top-3 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground" 
          onClick={() => onOpenChange(false)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 text-white">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
          <span className="sr-only">Close</span>
        </button>
        
        <DialogHeader className="pb-2">
          <DialogTitle className="text-xl sm:text-2xl font-bold text-center text-white">
            Get Rewards
          </DialogTitle>
          <p className="text-sm sm:text-base text-gray-400 text-center">
            Complete offers to get free Robux rewards
          </p>
        </DialogHeader>

        <div className="bg-yellow-900/20 border border-yellow-500/20 rounded-lg p-3 sm:p-4 mb-4 sm:mb-6">
          <div className="flex gap-2 items-start">
            <AlertTriangle className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-500 shrink-0 mt-0.5" />
            <p className="text-xs sm:text-sm text-yellow-200">
              Do not cheat while doing these tasks and do not use VPN or you will not get your reward. Admin or support will check them manually before approval.
            </p>
          </div>
        </div>
        
        <h3 className="font-semibold text-white mb-2 sm:mb-3 flex items-center gap-2 text-sm sm:text-base">
          Recommended Tasks
        </h3>
        
        <div className="space-y-3 sm:space-y-4 mb-4 sm:mb-6">
          {recommendedTasks.map((task, index) => (
            <Card 
              key={index}
              className="bg-robux-bg border border-white/10 p-3 sm:p-4 hover:border-robux-purple/50 transition-colors"
            >
              <div className="flex justify-between items-start">
                <div className="space-y-0.5 sm:space-y-1">
                  <h4 className="font-semibold text-white text-sm sm:text-base">{task.title}</h4>
                  <p className="text-xs sm:text-sm text-gray-400">{task.description}</p>
                </div>
                <div className="text-right">
                  <span className="text-green-400 font-medium text-xs sm:text-sm">+{task.robux} Robux</span>
                </div>
              </div>
            </Card>
          ))}
        </div>
        
        <div className="space-y-3 sm:space-y-4">
          <label className="text-xs sm:text-sm text-gray-400">Your Roblox Username</label>
          <Input 
            placeholder="Enter your Roblox username"
            className="bg-white/5 border-white/10 text-white placeholder:text-gray-500 text-sm sm:text-base p-2 sm:p-3"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <p className="text-xs text-gray-400">
            After admin or support verifies that everything is done correctly, you will receive your reward.
          </p>
          <Button 
            className="w-full bg-robux-green hover:bg-robux-green/90 h-10 sm:h-12 text-sm sm:text-base"
            onClick={handleStartNow}
            disabled={isSubmitting}
          >
            {isSubmitting ? "Processing..." : "Claim Now"}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default RewardsDialog;
