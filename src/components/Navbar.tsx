import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import RobuxCoin from './RobuxCoin';
import { Menu, X } from 'lucide-react';
import RewardsDialog from './RewardsDialog';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showRewardsDialog, setShowRewardsDialog] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <nav className={`fixed w-full ${scrolled ? 'bg-robux-darkBg/90' : 'bg-robux-darkBg/80'} backdrop-blur-md z-50 py-3 sm:py-4 px-4 md:px-8 transition-all duration-300 will-change-transform`}>
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center gap-2">
            <RobuxCoin size="md" />
            <span className="text-xl font-bold neon-purple">RobuxNeon</span>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white hover:text-robux-purple transition-colors fast-tap"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#packs" className="text-white hover:text-robux-purple transition-colors">
              Robux Packs
            </a>
            <a href="#proofs" className="text-white hover:text-robux-purple transition-colors">
              Proofs
            </a>
            <Button 
              className="bg-gradient-purple hover:opacity-90 transition-opacity animate-pulse-neon fast-tap"
              onClick={() => setShowRewardsDialog(true)}
            >
              Get Rewards
            </Button>
          </div>

          {/* Mobile Menu */}
          {isOpen && (
            <div className="absolute top-16 left-0 right-0 bg-robux-darkBg/95 backdrop-blur-md p-4 flex flex-col gap-4 md:hidden border-t border-robux-purple/30 animate-fade-in-up">
              <a 
                href="#packs" 
                className="text-white hover:text-robux-purple transition-colors p-2 text-center"
                onClick={() => setIsOpen(false)}
              >
                Robux Packs
              </a>
              <a 
                href="#proofs" 
                className="text-white hover:text-robux-purple transition-colors p-2 text-center"
                onClick={() => setIsOpen(false)}
              >
                Proofs
              </a>
              <Button 
                className="bg-gradient-purple hover:opacity-90 transition-opacity w-full fast-tap"
                onClick={() => {
                  setIsOpen(false);
                  setShowRewardsDialog(true);
                }}
              >
                Get Rewards
              </Button>
            </div>
          )}
        </div>
      </nav>
      
      <RewardsDialog 
        open={showRewardsDialog} 
        onOpenChange={setShowRewardsDialog} 
      />
    </>
  );
};

export default Navbar;
