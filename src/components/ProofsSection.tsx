
import React from 'react';
import { Card } from '@/components/ui/card';
import RobuxCoin from './RobuxCoin';

const ProofsSection: React.FC = () => {
  const testimonials = [
    {
      name: "Alex M.",
      robux: 1500,
      date: "April 20, 2025",
      comment: "Got my Robux within minutes after completing the tasks. Absolutely legit!"
    },
    {
      name: "Sarah K.",
      robux: 800,
      date: "April 18, 2025",
      comment: "Super easy to earn free Robux. The surveys were quick and painless."
    },
    {
      name: "Jason T.",
      robux: 2200,
      date: "April 15, 2025",
      comment: "Been using this site for months now. Always delivers on time!"
    },
    {
      name: "Emma L.",
      robux: 500,
      date: "April 12, 2025",
      comment: "Best Robux site I've found. Customer service is amazing too!"
    }
  ];

  return (
    <section id="proofs" className="py-16 px-4">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 neon-blue">
          Customer <span className="neon-purple">Proofs</span>
        </h2>
        <p className="text-gray-300 text-center mb-12 max-w-2xl mx-auto">
          Don't just take our word for it. See what our customers have to say about their experience with us.
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-robux-darkBg border border-white/10 p-6 card-hover">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 rounded-full bg-robux-purple/20 flex items-center justify-center">
                  <span className="font-bold text-robux-purple">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <h4 className="font-semibold text-white">{testimonial.name}</h4>
                  <p className="text-sm text-gray-400">{testimonial.date}</p>
                </div>
              </div>
              
              <p className="text-gray-300 mb-4 italic">"{testimonial.comment}"</p>
              
              <div className="flex items-center gap-2 text-robux-yellow">
                <span className="font-bold">Received:</span>
                <span className="font-bold">{testimonial.robux}</span>
                <RobuxCoin size="sm" />
              </div>
            </Card>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-white max-w-2xl mx-auto">
            We've helped thousands of Roblox players get their Robux quickly and securely.
            Join our satisfied customers today and power up your Roblox experience!
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProofsSection;
