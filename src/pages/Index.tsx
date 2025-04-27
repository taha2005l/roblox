import React, { Suspense, lazy } from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';

// Use lazy loading for components below the fold
const PackagesSection = lazy(() => import('@/components/PackagesSection'));
const RewardsSection = lazy(() => import('@/components/RewardsSection'));
const ProofsSection = lazy(() => import('@/components/ProofsSection'));
const OffersSection = lazy(() => import('@/components/OffersSection'));
const Footer = lazy(() => import('@/components/Footer'));

// Loading fallback
const SectionLoader = () => (
  <div className="py-16 flex items-center justify-center">
    <div className="animate-pulse w-16 h-16 rounded-full bg-robux-purple/30"></div>
  </div>
);

const Index = () => {
  return (
    <div className="min-h-screen bg-robux-bg text-white scroll-smooth">
      <Navbar />
      
      <main>
        <HeroSection />
        
        <Suspense fallback={<SectionLoader />}>
          <PackagesSection />
        </Suspense>
        
        <Suspense fallback={<SectionLoader />}>
          <RewardsSection />
        </Suspense>
        
        <Suspense fallback={<SectionLoader />}>
          <OffersSection />
        </Suspense>
        
        <Suspense fallback={<SectionLoader />}>
          <ProofsSection />
        </Suspense>
      </main>
      
      <Suspense fallback={<SectionLoader />}>
        <Footer />
      </Suspense>
    </div>
  );
};

export default Index;
