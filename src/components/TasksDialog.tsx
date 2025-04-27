import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Card } from "@/components/ui/card";
import { Gift } from 'lucide-react';

interface TasksDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const TasksDialog: React.FC<TasksDialogProps> = ({ open, onOpenChange }) => {
  const recommendedTasks = [
    {
      title: "MONEY CASH",
      description: "Install MONEY CASH app and receive 300 Robux",
      gems: 300
    },
    {
      title: "Mistplay",
      description: "Download Mistplay and earn 250 Robux instantly",
      gems: 250
    },
    {
      title: "PLAYTIME",
      description: "Install PLAYTIME app and get 200 Robux reward",
      gems: 200
    },
    {
      title: "TikTok",
      description: "Install TikTok and earn 150 Robux in your account",
      gems: 150
    }
  ];

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="bg-robux-darkBg border-robux-purple/20 max-w-md max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-center text-white flex items-center justify-center gap-2">
            <Gift className="h-6 w-6 text-white" />
            Recommended Tasks
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-4 mt-4">
          {recommendedTasks.map((task, index) => (
            <Card 
              key={index}
              className="bg-robux-bg border border-white/10 p-4 hover:border-robux-purple/50 transition-colors"
            >
              <div className="flex justify-between items-start">
                <div className="space-y-1">
                  <h3 className="font-semibold text-white">{task.title}</h3>
                  <p className="text-sm text-gray-400">{task.description}</p>
                </div>
                <div className="text-right">
                  <span className="text-green-400 font-medium">+{task.gems} Robux</span>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default TasksDialog; 