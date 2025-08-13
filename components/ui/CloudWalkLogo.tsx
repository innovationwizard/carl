'use client';

import { Sparkles } from 'lucide-react';

export function CarlSaganLogo() {
  return (
    <div className="flex items-center gap-2">
      <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-blue-700 rounded-lg flex items-center justify-center">
        <Sparkles size={16} className="text-white" />
      </div>
      <span className="font-bold text-white text-lg">Carl</span>
    </div>
  );
}