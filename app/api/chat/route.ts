import { NextRequest, NextResponse } from 'next/server';
import { ChatRequest, ChatResponse } from '@/types/chat';
import { RAGService } from '@/lib/rag/ragService';
import { OpenAIService } from '@/lib/openai/openaiService';
import { writeFileSync, appendFileSync } from 'fs';
import { join } from 'path';

export async function POST(request: NextRequest) {
  try {
    const { message, conversationId, history }: ChatRequest = await request.json();

    if (!message || !conversationId) {
      return NextResponse.json(
        { error: 'Message and conversation ID are required' },
        { status: 400 }
      );
    }

    // Initialize services
    const ragService = new RAGService();
    const openAIService = new OpenAIService();

    // Get relevant context using RAG
    const context = await ragService.getRelevantContext(message);

    // Generate response using OpenAI
    const response = await openAIService.generateResponse(
      message,
      context,
      history.slice(-10) // Keep last 10 messages for context
    );

    // Log conversation for debugging/demo
    try {
      const logEntry = {
        timestamp: new Date().toISOString(),
        conversationId,
        userMessage: message,
        carlResponse: response,
        sources: context.sources,
      };
      
      const logPath = join(process.cwd(), 'logs', 'conversations.txt');
      const logLine = `\n[${logEntry.timestamp}] Conversation: ${conversationId}\nUser: ${logEntry.userMessage}\nCarl: ${logEntry.carlResponse}\nSources: ${logEntry.sources.join(', ')}\n${'='.repeat(80)}\n`;
      
      appendFileSync(logPath, logLine);
      console.log('Conversation logged successfully');
    } catch (logError) {
      console.error('Failed to log conversation:', logError);
    }

    const chatResponse: ChatResponse = {
      response,
      sources: context.sources,
    };

    return NextResponse.json(chatResponse);
  } catch (error) {
    console.error('Chat API error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}