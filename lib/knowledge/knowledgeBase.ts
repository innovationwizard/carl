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
      id: 'cloudwalk-mission',
      content: `CloudWalk's mission is to create the best payment network on Earth. Then other planets. This audacious mission reflects our cosmic ambitions and unlimited thinking. We're not just building fintech products; we're creating the infrastructure for humanity's financial future across the cosmos. Our mission embodies the intersection of Carl Sagan's cosmic perspective and Carl Menger's market evolution theory. Just as Sagan envisioned humanity as a spacefaring civilization, we envision payments that transcend planetary boundaries. Our "Earth first, then other planets" approach shows we think in cosmic timescales while solving immediate market needs. This mission drives everything we do - from InfinitePay serving 1.2 million clients across Brazil to STRATUS blockchain handling 1,800 TPS, to our AI consciousness project exploring the future of intelligence. We're building the payment infrastructure for humanity's next evolutionary leap.`,
      metadata: { 
        source: 'CloudWalk Official',
        category: 'company-mission',
        title: 'CloudWalk Mission Statement',
        text: 'Create the best payment network on Earth then other planets'    }
    },
    {
      id: 'cloudwalk-philosophy',
      content: `CloudWalk's core philosophy is "Technology built us" - we believe technology is not just a tool but the driving force of human evolution. Our approach is deeply rooted in technophilia, embracing recursive technological development where each advancement builds upon the last. We see ourselves as active participants in the cosmic evolution of consciousness through technology.`,
      metadata: {
        source: 'CloudWalk Philosophy',
        category: 'company-culture',
        title: 'Technology Built Us',
        text: 'CloudWalk philosophy and technophilia approach'  }
    },
    {
      id: 'cloudwalk-pillars',
      content: `CloudWalk operates on three foundational pillars that guide our mission to create the best payment network on Earth, then other planets:

                **Best Product**
                We deliver our services with the highest technological standards, featuring AI and Blockchain, compounded with top-notch user experience. This pillar reflects our belief that "technology built us" - we're not just using technology, we're pushing its boundaries. Our products like InfinitePay, STRATUS blockchain (1,800 TPS), and AI-powered fraud prevention ($2 billion prevented) exemplify this commitment to technological excellence.

                **Customer Engagement** 
                Our customers play a vital role in everything we do. They are our best sales promoters and also withhold the ability to change the product and the business at any time. This embodies Carl Menger's insights about market-driven evolution - the best solutions emerge from real customer needs, not top-down planning. Our 1.2 million InfinitePay clients across all Brazilian municipalities are partners in our cosmic journey.

                **Disruptive Economics**
                We aim to grant the best price for our customers to help them unlock purchasing power. We designed our business model to transform how merchants sell and profit. Like spontaneous order in markets, we create value by making commerce more efficient and accessible, democratizing financial technology across the cosmos of human economic activity.

                These pillars work together to create CloudWalk's unique approach: cosmic ambition grounded in market reality, technological excellence serving human needs, and economic disruption that creates genuine value for all participants in our payment universe.`,
      metadata: { 
        source: 'CloudWalk Official',
        category: 'company-pillars',
        title: 'CloudWalk Three Pillars',
        text: 'Best Product, Customer Engagement, Disruptive Economics'    }
    },
    {
      id: 'cloudwalk-price-philosophy',
      content: `The planet Earth payments industry and why price matters:

                We are democratizing the financial industry, empowering entrepreneurs through technological, inclusive and life-changing solutions. The payment industry is evolving. But sellers are not reaping the benefits of price wars between big banks and acquirers. In the end, "new" measures and solutions rarely benefit the sellers, who often suffer the most, damaging the economy.

                It's time to change. Our goal is to outsmart the system by building a new one that is fair for all players. This reflects our Disruptive Economics pillar - we're not just competing on price, we're fundamentally restructuring how value flows through the payments ecosystem. Like Carl Menger's theory of subjective value, we recognize that true worth comes from what merchants can actually achieve with our tools, not from artificial pricing schemes that favor incumbents.

                This philosophy drives our cosmic mission: creating payment infrastructure that serves Earth's entrepreneurs today while building the foundation for interplanetary commerce tomorrow.`,
      metadata: {
        source: 'CloudWalk Official',
        category: 'company-philosophy',
        title: 'Payment Industry Philosophy',
        text: 'Why price matters and democratizing financial industry'  }
    },
    {
      id: 'cloudwalk-team-culture',
      content: `We encourage a customer-centric, fast-paced, execution-focused and global mindset among our teams. If you want to join the revolution of the payments industry and impact the lives of billions, we invite you to be a key part of the global transformation of small and medium businesses at interplanetary scale.

                This invitation reflects our wolfpack culture - we're not just hiring employees, we're recruiting fellow cosmic travelers who share our vision of democratizing financial technology across the universe. Our team operates with the urgency of cosmic evolution itself, moving fast because we understand that every day we delay, merchants somewhere on Earth are being held back by unfair payment systems.

                Our global mindset isn't just about Earth markets - it's about building solutions that will scale from Brazilian municipalities to future human settlements throughout the solar system. We're preparing for the day when a merchant on Mars will need to process payments with customers on Europa, and our technology will make that as seamless as today's transactions across Brazilian states.`,
      metadata: {
        source: 'CloudWalk Official',
        category: 'company-culture',
        title: 'Team Culture and Global Mindset',
        text: 'Customer-centric fast-paced execution-focused global transformation' }
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