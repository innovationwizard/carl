import { NextRequest, NextResponse } from 'next/server';
import { ChatRequest, ChatResponse } from '@/types/chat';
import { RAGService } from '@/lib/rag/ragService';
import { OpenAIService } from '@/lib/openai/openaiService';
import { supabase } from '@/lib/supabase/client'
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

    // Log conversation for debugging, improvement
  try {
    await supabase
      .from('conversation_logs')
      .insert({
        conversation_id: conversationId,
        user_message: message,
        carl_response: response,
        user_ip: request.headers.get('x-forwarded-for') || 'unknown',
        sources: context.sources
      })
  
  console.log('Conversation logged to Supabase successfully')
} catch (logError) {
  console.error('Failed to log to Supabase:', logError)
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