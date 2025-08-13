'use client';

import { useState, useRef, useEffect } from 'react';
import { Message } from '@/types/chat';
import { MessageList } from './MessageList';
import { MessageInput } from './MessageInput';
import { TypingIndicator } from './TypingIndicator';
import { useConversation } from '@/contexts/ConversationContext';
import { WelcomeMessage } from './WelcomeMessage';

export function ChatInterface() {
  const {
    messages,
    isLoading,
    sendMessage,
    clearConversation,
    currentConversation
  } = useConversation();
  const [inputMessage, setInputMessage] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isLoading]);

  const handleSendMessage = async (message: string) => {
    if (!message.trim() || isLoading) return;
    
    setInputMessage('');
    await sendMessage(message);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage(inputMessage);
    }
  };

  // If no messages, show welcome screen with centered input
  if (messages.length === 0) {
    return (
      <div className="flex flex-col h-full">
        <div className="flex-1 flex flex-col items-center justify-center p-4 md:p-6">
          <WelcomeMessage />
          
          {/* Centered input field */}
          <div className="w-full max-w-2xl mt-8">
            <MessageInput
              value={inputMessage}
              onChange={setInputMessage}
              onSend={handleSendMessage}
              onKeyPress={handleKeyPress}
              disabled={isLoading}
              placeholder="Ask Carl about astronomy, space exploration, or the wonders of the cosmos..."
            />
          </div>
        </div>
      </div>
    );
  }

  // If there are messages, show normal chat layout
  return (
    <div className="flex flex-col h-full">
      {/* Chat messages */}
      <div className="flex-1 overflow-y-auto p-4 md:p-6 space-y-4">
        <MessageList messages={messages} />
        {isLoading && <TypingIndicator />}
        <div ref={messagesEndRef} />
      </div>

      {/* Message input */}
      <div className="border-t border-gray-700 p-4 md:p-6">
        <MessageInput
          value={inputMessage}
          onChange={setInputMessage}
          onSend={handleSendMessage}
          onKeyPress={handleKeyPress}
          disabled={isLoading}
          placeholder="Ask Carl about astronomy, space exploration, or the wonders of the cosmos..."
        />
      </div>
    </div>
  );
}