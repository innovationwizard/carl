'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { useConversation } from '@/contexts/ConversationContext';
import { 
  MessageSquare, 
  Plus, 
  Trash2, 
  Clock,
  Sparkles,
  X
} from 'lucide-react';
import { formatDistanceToNow } from 'date-fns';

interface SidebarProps {
  onClose: () => void;
}

export function Sidebar({ onClose }: SidebarProps) {
  const { 
    conversations, 
    currentConversation, 
    createNewConversation, 
    switchConversation,
    deleteConversation 
  } = useConversation();
  
  const [deleteConfirm, setDeleteConfirm] = useState<string | null>(null);

  const handleNewConversation = () => {
    createNewConversation();
    onClose();
  };

  const handleSwitchConversation = (conversationId: string) => {
    switchConversation(conversationId);
    onClose();
  };

  const handleDeleteConversation = (conversationId: string) => {
    if (deleteConfirm === conversationId) {
      deleteConversation(conversationId);
      setDeleteConfirm(null);
    } else {
      setDeleteConfirm(conversationId);
      setTimeout(() => setDeleteConfirm(null), 3000);
    }
  };

  return (
    <div className="h-full flex flex-col">
      {/* Header */}
      <div className="p-4 border-b border-gray-700">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold text-white">Conversations</h2>
          <Button
            variant="ghost"
            size="sm"
            onClick={onClose}
            className="md:hidden text-gray-400 hover:text-white"
          >
            <X size={16} />
          </Button>
        </div>
        
        <Button
          onClick={handleNewConversation}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white"
        >
          <Plus size={16} className="mr-2" />
          New Conversation
        </Button>
      </div>

      {/* Conversations List */}
      <ScrollArea className="flex-1 p-4">
        <div className="space-y-2">
          {conversations.length === 0 ? (
            <div className="text-center py-8 text-gray-400">
              <MessageSquare size={24} className="mx-auto mb-2 opacity-50" />
              <p className="text-sm">No conversations yet</p>
            </div>
          ) : (
            conversations.map((conversation) => (
              <div
                key={conversation.id}
                className={`
                  group relative rounded-lg p-3 cursor-pointer transition-all
                  ${currentConversation?.id === conversation.id 
                    ? 'bg-blue-600/20 border border-blue-600/50' 
                    : 'bg-gray-800/50 hover:bg-gray-700/50 border border-gray-700'
                  }
                `}
                onClick={() => handleSwitchConversation(conversation.id)}
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <Sparkles size={12} className="text-purple-400 flex-shrink-0" />
                      <span className="text-sm font-medium text-white truncate">
                        {conversation.title || 'New Conversation'}
                      </span>
                    </div>
                    
                    {conversation.lastMessage && (
                      <p className="text-xs text-gray-400 truncate">
                        {conversation.lastMessage}
                      </p>
                    )}
                    
                    <div className="flex items-center gap-1 mt-1 text-xs text-gray-500">
                      <Clock size={10} />
                      {formatDistanceToNow(new Date(conversation.updatedAt), { addSuffix: true })}
                    </div>
                  </div>
                  
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleDeleteConversation(conversation.id);
                    }}
                    className={`
                      opacity-0 group-hover:opacity-100 transition-opacity p-1 h-auto
                      ${deleteConfirm === conversation.id 
                        ? 'text-red-400 hover:text-red-300' 
                        : 'text-gray-400 hover:text-red-400'
                      }
                    `}
                  >
                    <Trash2 size={12} />
                  </Button>
                </div>
                
                {deleteConfirm === conversation.id && (
                  <div className="absolute inset-0 bg-red-600/20 border border-red-600/50 rounded-lg flex items-center justify-center">
                    <span className="text-xs text-red-300">Click again to delete</span>
                  </div>
                )}
              </div>
            ))
          )}
        </div>
      </ScrollArea>

      {/* Footer */}
      <div className="p-4 border-t border-gray-700">
        <div className="text-xs text-gray-400 space-y-1">
          <p>⭐ Inspired by Carl Sagan</p>
          <p>💫 Carl v2.0 - Cosmic AI</p>
        </div>
      </div>
    </div>
  );
}