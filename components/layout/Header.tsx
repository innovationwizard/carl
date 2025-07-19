'use client';

import { CloudWalkLogo } from '@/components/ui/CloudWalkLogo';
import { Button } from '@/components/ui/button';
import { Settings, Bot, Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';

export function Header() {
  const { theme, setTheme } = useTheme();

  return (
    <header className="h-16 bg-gray-900/90 backdrop-blur-sm border-b border-gray-700 flex items-center justify-between px-4 md:px-6">
      <div className="flex items-center gap-3">
        <Bot size={24} />
        <div className="hidden md:block">
          <h1 className="text-xl font-bold text-white">Carl</h1>
          <p className="text-xs text-gray-400">CloudWalk AI Assistant</p>
        </div>
      </div>

      <div className="flex items-center gap-2">
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          className="text-gray-300 hover:text-white"
        >
          {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
        </Button>
        
        <Button
          variant="ghost"
          size="sm"
          className="text-gray-300 hover:text-white"
        >
          <Settings size={16} />
        </Button>
      </div>
    </header>
  );
}