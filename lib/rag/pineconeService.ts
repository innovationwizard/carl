import { Pinecone } from '@pinecone-database/pinecone';

interface PineconeMatch {
  id: string;
  score: number;
  metadata?: Record<string, any>;
}

export class PineconeService {
  private pinecone: Pinecone;
  private indexName: string;

  constructor() {
    this.pinecone = new Pinecone({
      apiKey: process.env.PINECONE_API_KEY || '',
    });
    this.indexName = process.env.PINECONE_INDEX_NAME || 'cloudwalk-carl';
    
    console.log('🔧 Pinecone SDK initialized for index:', this.indexName);
  }

  async search(embedding: number[], topK: number = 5): Promise<PineconeMatch[]> {
    try {
      const index = this.pinecone.index(this.indexName);
      console.log('🔍 Searching with Pinecone SDK...');
      
      const results = await index.query({
        vector: embedding,
        topK,
        includeMetadata: true,
      });

      return results.matches || [];
    } catch (error) {
      console.error('Pinecone search error:', error);
      return [];
    }
  }

  async upsert(id: string, embedding: number[], metadata: Record<string, any>): Promise<void> {
    try {
      const index = this.pinecone.index(this.indexName);
      console.log('📤 Upserting with Pinecone SDK...');
      
      await index.upsert([
        {
          id,
          values: embedding,
          metadata,
        },
      ]);
    } catch (error) {
      console.error('Pinecone upsert error:', error);
    }
  }
}