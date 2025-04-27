import React from 'react';
import PackageCard from './PackageCard';

const PackagesSection: React.FC = () => {
  return (
    <section id="packs" className="py-12 sm:py-16 px-4 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-transparent -z-10"></div>
      
      <div className="container mx-auto">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-extrabold mb-2 sm:mb-4 neon-purple">
            Choose Your <span className="neon-yellow">Robux</span> Package
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto text-sm sm:text-base">
            Select the perfect Robux package that fits your needs. From starter packs to mega bundles, we've got you covered!
          </p>
        </div>
        
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6 md:gap-8">
          <PackageCard 
            title="Starter Pack"
            amount={400}
            color="purple"
          />
          <PackageCard 
            title="Value Pack"
            amount={800}
            popular={true}
            color="blue"
          />
          <PackageCard 
            title="Pro Pack"
            amount={1700}
            bestValue={true}
            color="green"
          />
          <PackageCard 
            title="Mega Pack"
            amount={4500}
            color="yellow"
          />
        </div>
      </div>
    </section>
  );
};

export default PackagesSection;
