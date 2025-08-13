'use client';

import { useState } from 'react';
import { Send, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';

interface MessageInputProps {
  value: string;
  onChange: (value: string) => void;
  onSend: (message: string) => void;
  onKeyPress: (e: React.KeyboardEvent) => void;
  disabled: boolean;
  placeholder: string;
}

export function MessageInput({
  value,
  onChange,
  onSend,
  onKeyPress,
  disabled,
  placeholder
}: MessageInputProps) {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (value.trim() && !disabled) {
      onSend(value);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-3 items-end max-w-full overflow-hidden">
      <div className="flex-1">
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-blue-600/20 rounded-lg blur-sm"></div>
          <Textarea
            value={value}
            onChange={(e) => onChange(e.target.value)}
            onKeyPress={onKeyPress}
            placeholder={placeholder}
            disabled={disabled}
            rows={1}
                         className="relative min-h-[48px] max-h-32 resize-none bg-gray-700/80 border-gray-500 text-white placeholder-gray-300 focus:border-blue-400 focus:ring-2 focus:ring-blue-400/30 focus:bg-gray-700/90 hover:border-blue-500 transition-all duration-200 w-full px-2 sm:px-4 min-w-0 backdrop-blur-sm rounded-lg"
          />
        </div>
      </div>
      
      <Button
        type="submit"
        disabled={disabled || !value.trim()}
        className="h-12 w-12 p-0 bg-blue-500 hover:bg-blue-400 disabled:opacity-50 shadow-lg shadow-blue-500/20 hover:shadow-blue-400/30 transition-all duration-200"
      >
        {disabled ? (
          <Loader2 size={20} className="animate-spin" />
        ) : (
          <Send size={20} />
        )}
      </Button>
    </form>
  );
}