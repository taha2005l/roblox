import React from 'react';
import RobuxCoin from './RobuxCoin';

const HeroSection: React.FC = () => {
  return (
    <section className="relative pt-20 sm:pt-28 pb-16 sm:pb-20 overflow-hidden">
      <div className="hero-gradient absolute inset-0 z-0"></div>
      
      {/* Additional floating Robux coins */}
      <div className="absolute top-20 left-10 opacity-50 hidden sm:block">
        <RobuxCoin size="lg" className="animate-float" />
      </div>
      <div className="absolute bottom-20 right-10 opacity-50 hidden sm:block">
        <RobuxCoin size="lg" className="animate-float" />
      </div>
      <div className="absolute top-40 right-20 opacity-30 hidden sm:block">
        <RobuxCoin size="md" className="animate-float-slow" />
      </div>
      <div className="absolute bottom-40 left-20 opacity-30 hidden sm:block">
        <RobuxCoin size="md" className="animate-float-slow" />
      </div>
      
      {/* Mobile floating coins (fewer and smaller) */}
      <div className="absolute top-16 left-8 opacity-40 sm:hidden">
        <RobuxCoin size="md" className="animate-float" />
      </div>
      <div className="absolute bottom-16 right-8 opacity-40 sm:hidden">
        <RobuxCoin size="md" className="animate-float" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold mb-3 sm:mb-4 neon-purple tracking-tight">
            Best Deals for <span className="neon-yellow">Robux</span>
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl font-medium mb-2 text-white">
            Get Robux fast, safe, and at the best prices!
          </p>
          <p className="text-base sm:text-lg mb-6 sm:mb-8 text-gray-300">
            The most affordable Robux packages and free rewards for your Roblox adventures
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
