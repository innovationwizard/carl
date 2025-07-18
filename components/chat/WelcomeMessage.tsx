'use client';

import { Sparkles, Brain, Zap, Globe } from 'lucide-react';

export function WelcomeMessage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[400px] text-center space-y-6">
      <div className="relative">
        <div className="w-20 h-20 bg-gradient-to-br from-purple-600 to-blue-600 rounded-full flex items-center justify-center">
          <Sparkles size={32} className="text-white" />
        </div>
        <div className="absolute -top-1 -right-1 w-6 h-6 bg-yellow-500 rounded-full flex items-center justify-center">
          <Brain size={12} className="text-white" />
        </div>
      </div>

      <div className="space-y-2">
        <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
          Hello, I'm Carl
        </h1>
        <p className="text-gray-300 text-lg">
          Your AI companion for exploring CloudWalk's cosmic technology
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-2xl">
        <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-lg p-4">
          <div className="flex items-center gap-2 mb-2">
            <Zap size={16} className="text-yellow-500" />
            <span className="font-medium text-white">CloudWalk Universe</span>
          </div>
          <p className="text-sm text-gray-400">
            Explore InfinitePay, STRATUS blockchain, and our AI consciousness project
          </p>
        </div>

        <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-lg p-4">
          <div className="flex items-center gap-2 mb-2">
            <Brain size={16} className="text-purple-500" />
            <span className="font-medium text-white">AI & Technology</span>
          </div>
          <p className="text-sm text-gray-400">
            Discuss artificial intelligence, consciousness, and the evolution of technology
          </p>
        </div>

        <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-lg p-4">
          <div className="flex items-center gap-2 mb-2">
            <Globe size={16} className="text-blue-500" />
            <span className="font-medium text-white">Cosmic Perspective</span>
          </div>
          <p className="text-sm text-gray-400">
            Explore how technology connects us to the cosmos and market evolution
          </p>
        </div>
      </div>

      <div className="text-sm text-gray-400 max-w-md">
        Ask me anything about CloudWalk's journey, our wolfpack culture, or the philosophical foundations that guide our technological evolution.
      </div>
    </div>
  );
}