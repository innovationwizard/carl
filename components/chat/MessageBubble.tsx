'use client';

import { Message } from '@/types/chat';
import { User, Bot, Sparkles } from 'lucide-react';
import { formatDistanceToNow } from 'date-fns';

interface MessageBubbleProps {
  message: Message;
}

export function MessageBubble({ message }: MessageBubbleProps) {
  const isUser = message.role === 'user';
  
  return (
    <div className={`flex ${isUser ? 'justify-end' : 'justify-start'} mb-4`}>
      <div className={`flex ${isUser ? 'flex-row-reverse' : 'flex-row'} items-start max-w-[80%] gap-3`}>
        {/* Avatar */}
        <div className={`
          flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center
          ${isUser ? 'bg-blue-600' : 'bg-gradient-to-br from-purple-600 to-blue-600'}
        `}>
          {isUser ? (
            <User size={16} className="text-white" />
          ) : (
            <Bot size={16} className="text-white" />
          )}
        </div>

        {/* Message content */}
        <div className={`
          rounded-2xl px-4 py-3 max-w-full
          ${isUser 
            ? 'bg-blue-600 text-white' 
            : 'bg-gray-700 text-gray-100 border border-gray-600'
          }
        `}>
          {!isUser && (
            <div className="flex items-center gap-2 mb-2 text-sm text-gray-300">
              <Sparkles size={14} className="text-purple-400" />
              <span className="font-medium">Carl</span>
            </div>
          )}
          
          <div className="whitespace-pre-wrap text-sm leading-relaxed">
            {message.content}
          </div>

          {/* Timestamp */}
          <div className={`
            text-xs mt-2 opacity-70
            ${isUser ? 'text-blue-100' : 'text-gray-400'}
          `}>
            {formatDistanceToNow(new Date(message.timestamp), { addSuffix: true })}
          </div>
        </div>
      </div>
    </div>
  );
}