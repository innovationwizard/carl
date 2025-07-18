export interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: string;
  conversationId: string;
}

export interface Conversation {
  id: string;
  title: string;
  createdAt: string;
  updatedAt: string;
  lastMessage: string;
}

export interface ChatRequest {
  message: string;
  conversationId: string;
  history: Message[];
}

export interface ChatResponse {
  response: string;
  sources?: string[];
}