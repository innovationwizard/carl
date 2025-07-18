'use client';

import { useState, useEffect, useRef } from 'react';
import { ChatInterface } from '@/components/chat/ChatInterface';
import { Header } from '@/components/layout/Header';
import { Sidebar } from '@/components/layout/Sidebar';
import { ConversationProvider } from '@/contexts/ConversationContext';
import { Toaster } from '@/components/ui/toaster';
import { Menu, X } from 'lucide-react';

export default function Home() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center">
        <div className="text-white text-lg">Loading Carl...</div>
      </div>
    );
  }

  return (
    <ConversationProvider>
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
        <Header />
        
        <div className="flex h-[calc(100vh-4rem)]">
          {/* Mobile sidebar toggle */}
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="md:hidden fixed top-20 left-4 z-50 p-2 rounded-lg bg-gray-800 hover:bg-gray-700 transition-colors"
            aria-label="Toggle sidebar"
          >
            {sidebarOpen ? <X size={20} /> : <Menu size={20} />}
          </button>

          {/* Sidebar */}
          <div className={`
            ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}
            md:translate-x-0 transition-transform duration-300 ease-in-out
            fixed md:static inset-y-0 left-0 z-40
            w-80 bg-gray-800/50 backdrop-blur-lg border-r border-gray-700
            md:w-80 mt-16 md:mt-0
          `}>
            <Sidebar onClose={() => setSidebarOpen(false)} />
          </div>

          {/* Main content */}
          <div className="flex-1 flex flex-col">
            <ChatInterface />
          </div>
        </div>

        <Toaster />
      </div>
    </ConversationProvider>
  );
}