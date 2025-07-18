'use client';

import { Zap } from 'lucide-react';

export function CloudWalkLogo() {
  return (
    <div className="flex items-center gap-2">
      <div className="w-8 h-8 bg-gradient-to-br from-purple-600 to-blue-600 rounded-lg flex items-center justify-center">
        <Zap size={16} className="text-white" />
      </div>
      <span className="font-bold text-white text-lg">CloudWalk</span>
    </div>
  );
}