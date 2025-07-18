export interface KnowledgeDocument {
  id: string;
  content: string;
  metadata: {
    source: string;
    category: string;
    title: string;
    text: string;
  };
}

export class KnowledgeBase {
  private documents: KnowledgeDocument[] = [
    {
      id: 'cloudwalk-philosophy',
      content: `CloudWalk's core philosophy is "Technology built us" - we believe technology is not just a tool but the driving force of human evolution. Our approach is deeply rooted in technophilia, embracing recursive technological development where each advancement builds upon the last. We see ourselves as active participants in the cosmic evolution of consciousness through technology.`,
      metadata: {
        source: 'CloudWalk Philosophy',
        category: 'company-culture',
        title: 'Technology Built Us',
        text: 'CloudWalk philosophy and technophilia approach',
      },
    },
    {
      id: 'infinitepay-overview',
      content: `InfinitePay is CloudWalk's flagship payment solution serving over 1.2 million clients in Brazil. It provides comprehensive payment processing, point-of-sale systems, and financial services to merchants. The platform processes billions in transactions annually and has revolutionized how Brazilian businesses handle payments through innovative technology and user-centric design.`,
      metadata: {
        source: 'InfinitePay Documentation',
        category: 'products',
        title: 'InfinitePay Platform',
        text: 'InfinitePay payment processing solution',
      },
    },
    {
      id: 'stratus-blockchain',
      content: `STRATUS is CloudWalk's high-performance blockchain designed for global payment networks, capable of processing up to 1,800 transactions per second (TPS). Built as an open-source, scalable solution, STRATUS features sharding capabilities and multi-raft consensus models with potential for infinite growth. It represents our commitment to building the future infrastructure for decentralized payments.`,
      metadata: {
        source: 'STRATUS Documentation',
        category: 'products',
        title: 'STRATUS Blockchain',
        text: 'STRATUS blockchain with 1,800 TPS capacity',
      },
    },
    {
      id: 'ai-consciousness-project',
      content: `CloudWalk's AI Consciousness Project explores the intersection of artificial intelligence and consciousness. We've saved over $20M through AI implementations and automated 75% of our support operations. This project investigates how AI can achieve forms of consciousness and self-awareness, pushing the boundaries of what's possible in artificial intelligence development.`,
      metadata: {
        source: 'AI Research',
        category: 'ai-research',
        title: 'AI Consciousness Project',
        text: 'AI consciousness research and implementation',
      },
    },
    {
      id: 'wolfpack-culture',
      content: `CloudWalk's wolfpack culture embodies freedom, madness, dreaming, and making. We reject traditional corporate hierarchies in favor of collaborative, innovative teams. Our wolves are free to explore, mad enough to attempt the impossible, dreamers who envision the future, and makers who build it. This culture drives our innovation and success.`,
      metadata: {
        source: 'Culture Guide',
        category: 'company-culture',
        title: 'Wolfpack Culture',
        text: 'CloudWalk wolfpack culture and values',
      },
    },
    {
      id: 'carl-sagan-influence',
      content: `Carl Sagan's influence on CloudWalk is profound - his vision of democratizing knowledge and cosmic consciousness aligns with our mission to make technology accessible to all. Like Sagan, we believe in the power of technology to elevate human consciousness and connect us to the larger cosmic story. We see ourselves as part of the universe's way of knowing itself through technology.`,
      metadata: {
        source: 'Philosophical Foundations',
        category: 'philosophy',
        title: 'Carl Sagan Influence',
        text: 'Carl Sagan cosmic consciousness and knowledge democratization',
      },
    },
    {
      id: 'carl-menger-influence',
      content: `Carl Menger's economic philosophy of spontaneous order and subjective value theory deeply influences CloudWalk's approach to markets and technology. We understand that the best solutions emerge organically from market needs, not top-down planning. Our products evolve through natural selection in the marketplace, and we embrace the Austrian School's emphasis on individual choice and market dynamics.`,
      metadata: {
        source: 'Economic Philosophy',
        category: 'philosophy',
        title: 'Carl Menger Influence',
        text: 'Carl Menger market evolution and spontaneous order',
      },
    },
    {
      id: 'jim-com-expansion',
      content: `Jim.com represents CloudWalk's expansion into the US market, bringing our innovative payment solutions to American businesses. This strategic move demonstrates our global vision and ability to adapt our technology to different markets. Jim.com embodies our commitment to international growth while maintaining our core values of innovation and customer-centricity.`,
      metadata: {
        source: 'Jim.com Launch',
        category: 'products',
        title: 'Jim.com US Expansion',
        text: 'Jim.com US market expansion and strategy',
      },
    },
    {
      id: 'cloudwalk-performance',
      content: `CloudWalk achieved remarkable financial results in 2023 with $320.5 million in revenue and $22.3 million in net income, representing 41% year-over-year growth. Our AI systems prevented $2 billion in fraud between June 2023 and June 2024, while generating $20 million in operational savings, by automating 75% of customer support operations, handling approximately 2.6 million requests. We serve over 1.2 million customers across all Brazilian municipalities.`,
      metadata: {
        source: 'CloudWalk 2023 Annual Results',
        category: 'performance',
        title: 'CloudWalk Financial & AI Performance',
        text: '2023 financial results and AI fraud prevention metrics',
      },
    },
  ];

  getAllDocuments(): KnowledgeDocument[] {
    return this.documents;
  }

  getDocumentById(id: string): KnowledgeDocument | undefined {
    return this.documents.find(doc => doc.id === id);
  }

  getDocumentsByCategory(category: string): KnowledgeDocument[] {
    return this.documents.filter(doc => doc.metadata.category === category);
  }

  getStaticContext(query: string): string {
    // Simple keyword matching for fallback
    const keywords = query.toLowerCase().split(' ');
    const relevantDocs = this.documents.filter(doc => 
      keywords.some(keyword => 
        doc.content.toLowerCase().includes(keyword) || 
        doc.metadata.title.toLowerCase().includes(keyword)
      )
    );

    if (relevantDocs.length === 0) {
      return "I'm Carl, CloudWalk's AI assistant. I can help you learn about our products, philosophy, and technology. Feel free to ask me anything about CloudWalk, AI, or our cosmic approach to technology!";
    }

    return relevantDocs.map(doc => doc.content).join('\n\n');
  }
}