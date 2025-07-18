'use client';

import { createContext, useContext, useReducer, useEffect } from 'react';
import { Message, Conversation } from '@/types/chat';
import { v4 as uuidv4 } from 'uuid';

interface ConversationState {
  conversations: Conversation[];
  currentConversation: Conversation | null;
  messages: Message[];
  isLoading: boolean;
}

type ConversationAction = 
  | { type: 'SET_CONVERSATIONS'; payload: Conversation[] }
  | { type: 'SET_CURRENT_CONVERSATION'; payload: Conversation }
  | { type: 'ADD_MESSAGE'; payload: Message }
  | { type: 'SET_MESSAGES'; payload: Message[] }
  | { type: 'SET_LOADING'; payload: boolean }
  | { type: 'CREATE_CONVERSATION'; payload: Conversation }
  | { type: 'DELETE_CONVERSATION'; payload: string }
  | { type: 'UPDATE_CONVERSATION'; payload: Partial<Conversation> & { id: string } };

const initialState: ConversationState = {
  conversations: [],
  currentConversation: null,
  messages: [],
  isLoading: false,
};

function conversationReducer(state: ConversationState, action: ConversationAction): ConversationState {
  switch (action.type) {
    case 'SET_CONVERSATIONS':
      return { ...state, conversations: action.payload };
    
    case 'SET_CURRENT_CONVERSATION':
      return { ...state, currentConversation: action.payload };
    
    case 'ADD_MESSAGE':
      return { ...state, messages: [...state.messages, action.payload] };
    
    case 'SET_MESSAGES':
      return { ...state, messages: action.payload };
    
    case 'SET_LOADING':
      return { ...state, isLoading: action.payload };
    
    case 'CREATE_CONVERSATION':
      return {
        ...state,
        conversations: [action.payload, ...state.conversations],
        currentConversation: action.payload,
        messages: [],
      };
    
    case 'DELETE_CONVERSATION':
      const filteredConversations = state.conversations.filter(c => c.id !== action.payload);
      return {
        ...state,
        conversations: filteredConversations,
        currentConversation: state.currentConversation?.id === action.payload 
          ? filteredConversations[0] || null 
          : state.currentConversation,
        messages: state.currentConversation?.id === action.payload ? [] : state.messages,
      };
    
    case 'UPDATE_CONVERSATION':
      return {
        ...state,
        conversations: state.conversations.map(c => 
          c.id === action.payload.id ? { ...c, ...action.payload } : c
        ),
        currentConversation: state.currentConversation?.id === action.payload.id 
          ? { ...state.currentConversation, ...action.payload }
          : state.currentConversation,
      };
    
    default:
      return state;
  }
}

const ConversationContext = createContext<{
  state: ConversationState;
  sendMessage: (content: string) => Promise<void>;
  createNewConversation: () => void;
  switchConversation: (conversationId: string) => void;
  deleteConversation: (conversationId: string) => void;
  clearConversation: () => void;
} | null>(null);

export function ConversationProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(conversationReducer, initialState);

  // Initialize with a default conversation
  useEffect(() => {
    const defaultConversation: Conversation = {
      id: uuidv4(),
      title: 'Welcome to CloudWalk',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      lastMessage: '',
    };
    
    dispatch({ type: 'CREATE_CONVERSATION', payload: defaultConversation });
  }, []);

  const sendMessage = async (content: string) => {
    if (!state.currentConversation) return;

    const userMessage: Message = {
      id: uuidv4(),
      role: 'user',
      content,
      timestamp: new Date().toISOString(),
      conversationId: state.currentConversation.id,
    };

    dispatch({ type: 'ADD_MESSAGE', payload: userMessage });
    dispatch({ type: 'SET_LOADING', payload: true });

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: content,
          conversationId: state.currentConversation.id,
          history: state.messages,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to send message');
      }

      const data = await response.json();
      
      const assistantMessage: Message = {
        id: uuidv4(),
        role: 'assistant',
        content: data.response,
        timestamp: new Date().toISOString(),
        conversationId: state.currentConversation.id,
      };

      dispatch({ type: 'ADD_MESSAGE', payload: assistantMessage });
      
      // Update conversation with last message
      dispatch({ 
        type: 'UPDATE_CONVERSATION', 
        payload: { 
          id: state.currentConversation.id,
          lastMessage: content,
          updatedAt: new Date().toISOString(),
          title: state.messages.length === 0 ? content.slice(0, 50) + '...' : state.currentConversation.title,
        }
      });

    } catch (error) {
      console.error('Error sending message:', error);
      const errorMessage: Message = {
        id: uuidv4(),
        role: 'assistant',
        content: 'I apologize, but I encountered an error. Please try again.',
        timestamp: new Date().toISOString(),
        conversationId: state.currentConversation.id,
      };
      dispatch({ type: 'ADD_MESSAGE', payload: errorMessage });
    } finally {
      dispatch({ type: 'SET_LOADING', payload: false });
    }
  };

  const createNewConversation = () => {
    const newConversation: Conversation = {
      id: uuidv4(),
      title: 'New Conversation',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      lastMessage: '',
    };
    
    dispatch({ type: 'CREATE_CONVERSATION', payload: newConversation });
  };

  const switchConversation = (conversationId: string) => {
    const conversation = state.conversations.find(c => c.id === conversationId);
    if (conversation) {
      dispatch({ type: 'SET_CURRENT_CONVERSATION', payload: conversation });
      dispatch({ type: 'SET_MESSAGES', payload: [] }); // In a real app, load messages from storage
    }
  };

  const deleteConversation = (conversationId: string) => {
    dispatch({ type: 'DELETE_CONVERSATION', payload: conversationId });
  };

  const clearConversation = () => {
    dispatch({ type: 'SET_MESSAGES', payload: [] });
  };

  return (
    <ConversationContext.Provider
      value={{
        state,
        sendMessage,
        createNewConversation,
        switchConversation,
        deleteConversation,
        clearConversation,
      }}
    >
      {children}
    </ConversationContext.Provider>
  );
}

export function useConversation() {
  const context = useContext(ConversationContext);
  if (!context) {
    throw new Error('useConversation must be used within a ConversationProvider');
  }
  
  return {
    ...context.state,
    ...context,
  };
}