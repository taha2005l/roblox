import React, { useState, useEffect } from 'react';
import { Card } from '@/components/ui/card';

interface LiveActivityFeedProps {
  className?: string;
}

const LiveActivityFeed: React.FC<LiveActivityFeedProps> = ({ className }) => {
  const [activities, setActivities] = useState([
    "Alex from USA just earned 800 Robux! 🎉",
    "Maria from Brazil completed a task for 500 Robux! ✨",
    "John from Canada just got verified! 🌟",
    "Emma from UK earned 1000 Robux! 💎",
  ]);

  // Rotate activities to create a live effect
  useEffect(() => {
    const interval = setInterval(() => {
      setActivities(prev => {
        const newActivities = [...prev];
        const firstActivity = newActivities.shift();
        if (firstActivity) newActivities.push(firstActivity);
        return newActivities;
      });
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={`space-y-2 sm:space-y-3 ${className}`}>
      {activities.map((activity, index) => (
        <Card 
          key={index}
          className="bg-robux-bg border border-white/10 p-2.5 sm:p-4 text-white text-sm sm:text-base rounded-lg hover:border-white/20 transition-colors animate-fade-in-up"
          style={{ animationDelay: `${index * 150}ms` }}
        >
          {activity}
        </Card>
      ))}
    </div>
  );
};

export default LiveActivityFeed; 