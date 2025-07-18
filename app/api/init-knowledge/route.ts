import { NextRequest, NextResponse } from 'next/server';
import { RAGService } from '@/lib/rag/ragService';

export async function POST(request: NextRequest) {
  try {
    console.log('Initializing knowledge base...');
    
    const ragService = new RAGService();
    await ragService.initializeKnowledgeBase();
    
    return NextResponse.json({ 
      message: 'Knowledge base initialized successfully' 
    });
  } catch (error) {
    console.error('Knowledge base initialization error:', error);
    return NextResponse.json(
      { error: 'Failed to initialize knowledge base' },
      { status: 500 }
    );
  }
}
