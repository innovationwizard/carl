'use client';

import { Sparkles, Star, Telescope, Globe } from 'lucide-react';

export function WelcomeMessage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[400px] text-center space-y-6">
      <div className="relative">
        <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full flex items-center justify-center">
          <Sparkles size={32} className="text-white" />
        </div>
         <div className="absolute -top-1 -right-1 w-6 h-6 bg-yellow-500 rounded-full flex items-center justify-center">
          <Telescope size={12} className="text-white" />
        </div>
      </div>

      <div className="space-y-2">
        <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
          Hello, I'm Carl
        </h1>
        <p className="text-gray-300 text-lg">
          Your AI companion for exploring the wonders of the cosmos
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-2xl">
        <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-lg p-4">
          <div className="flex items-center gap-2 mb-2">
            <Star size={16} className="text-yellow-500" />
            <span className="font-medium text-white">Astronomy & Space</span>
          </div>
          <p className="text-sm text-gray-400">
            Explore stars, planets, galaxies, and the vast universe around us
          </p>
        </div>

        <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-lg p-4">
          <div className="flex items-center gap-2 mb-2">
            <Telescope size={16} className="text-purple-500" />
            <span className="font-medium text-white">Scientific Discovery</span>
          </div>
          <p className="text-sm text-gray-400">
            Discuss space exploration, SETI, and the search for extraterrestrial life
          </p>
        </div>

        <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-lg p-4">
          <div className="flex items-center gap-2 mb-2">
            <Globe size={16} className="text-blue-500" />
            <span className="font-medium text-white">Cosmic Perspective</span>
          </div>
          <p className="text-sm text-gray-400">
            Understand our place in the universe and the pale blue dot we call home
          </p>
        </div>
      </div>

      <div className="text-sm text-gray-400 max-w-md">
        Ask me anything about astronomy, space exploration, scientific skepticism, or the wonders of the cosmos that Carl Sagan would discuss.
      </div>
    </div>
  );
}