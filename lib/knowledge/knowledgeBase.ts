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
      id: 'carl-sagan-biography',
      content: `Carl Edward Sagan (1934-1996) was an American astronomer, planetary scientist, cosmologist, astrophysicist, astrobiologist, author, and science communicator. Born in Brooklyn, New York, Sagan showed an early interest in science and the cosmos. He earned his PhD in astronomy and astrophysics from the University of Chicago in 1960. Throughout his career, Sagan made fundamental contributions to the study of planetary atmospheres, the greenhouse effect on Venus, seasonal changes on Mars, and the search for extraterrestrial life. He was a key figure in NASA's Mariner, Viking, Voyager, and Galileo missions. Sagan authored over 600 scientific papers and more than 20 books, including "Cosmos," "Contact," "The Demon-Haunted World," and "Pale Blue Dot." His 1980 television series "Cosmos: A Personal Voyage" became the most widely watched series in the history of American public television, reaching over 500 million people in 60 countries. Sagan was a passionate advocate for scientific skepticism, space exploration, and the search for extraterrestrial intelligence (SETI).`,
      metadata: { 
        source: 'Carl Sagan Biography',
        category: 'biography',
        title: 'Carl Sagan Life and Career',
        text: 'Carl Sagan biography and scientific contributions'    }
    },
    {
      id: 'cosmos-series',
      content: `"Cosmos: A Personal Voyage" (1980) was Carl Sagan's groundbreaking 13-part television series that explored the universe and humanity's place within it. The series covered topics ranging from the origins of life to the search for extraterrestrial intelligence, from the birth of stars to the evolution of human civilization. Each episode was structured around a "cosmic calendar" that compressed the 13.8 billion years of cosmic history into a single year. The series featured Sagan's signature blend of scientific rigor and poetic wonder, using the "Ship of the Imagination" to travel through space and time. "Cosmos" won Emmy and Peabody awards and became the most widely watched series in the history of American public television. The series inspired millions of people worldwide to pursue careers in science and fostered a renewed public interest in astronomy and space exploration.`,
      metadata: {
        source: 'Cosmos Television Series',
        category: 'media',
        title: 'Cosmos: A Personal Voyage',
        text: 'Carl Sagan Cosmos television series and impact'  }
    },
    {
      id: 'pale-blue-dot',
      content: `The "Pale Blue Dot" is one of Carl Sagan's most famous concepts, referring to a photograph of Earth taken by the Voyager 1 space probe on February 14, 1990, from a distance of about 6 billion kilometers. In the image, Earth appears as a tiny, pale blue speck against the vastness of space. Sagan wrote about this image in his 1994 book "Pale Blue Dot: A Vision of the Human Future in Space," where he famously stated: "Look again at that dot. That's here. That's home. That's us. On it everyone you love, everyone you know, everyone you ever heard of, every human being who ever was, lived out their lives... The aggregate of our joy and suffering, thousands of confident religions, ideologies, and economic doctrines, every hunter and forager, every hero and coward, every creator and destroyer of civilization, every king and peasant, every young couple in love, every mother and father, hopeful child, inventor and explorer, every teacher of morals, every corrupt politician, every 'superstar,' every 'supreme leader,' every saint and sinner in the history of our species lived there—on a mote of dust suspended in a sunbeam." This perspective emphasizes the fragility and preciousness of our planet and the unity of humanity.`,
      metadata: { 
        source: 'Pale Blue Dot',
        category: 'philosophy',
        title: 'Pale Blue Dot Concept',
        text: 'Pale Blue Dot photograph and Carl Sagan perspective'    }
    },
    {
      id: 'seti-search',
      content: `The Search for Extraterrestrial Intelligence (SETI) was one of Carl Sagan's lifelong passions. He was a pioneer in the field of exobiology and the search for life beyond Earth. Sagan believed that given the vast number of stars and planets in the universe, it was statistically likely that other intelligent civilizations existed. He was involved in the design of the Pioneer plaque and the Voyager Golden Record, which were sent into space as messages to any potential extraterrestrial civilizations. Sagan co-founded the Planetary Society, which continues to support SETI research. He advocated for the use of radio telescopes to listen for signals from other civilizations and was involved in the development of the Drake Equation, which estimates the number of active, communicative extraterrestrial civilizations in the Milky Way galaxy. Sagan emphasized that SETI was not just about finding other life, but about understanding our place in the cosmos and the potential for human civilization to survive and thrive.`,
      metadata: {
        source: 'SETI Research',
        category: 'astrobiology',
        title: 'Search for Extraterrestrial Intelligence',
        text: 'SETI research and Carl Sagan contributions' }
    },
    {
      id: 'voyager-golden-record',
      content: `The Voyager Golden Record is a phonograph record that was included aboard both Voyager spacecraft launched in 1977. Carl Sagan chaired the committee that selected the contents of the record, which was intended to communicate a story of our world to extraterrestrials. The record contains 115 images, a variety of natural sounds (such as those made by surf, wind, thunder, and animals), musical selections from different cultures and eras, and spoken greetings from Earth-people in fifty-five languages. The record also includes a message from President Jimmy Carter and a statement by the Secretary-General of the United Nations. The record is encased in a protective aluminum jacket, along with a cartridge and needle. Instructions, in symbolic language, explain the origin of the spacecraft and indicate how the record is to be played. The 115 images are encoded in analog form. The musical selection is also varied, featuring artists such as Bach, Mozart, Beethoven, and Chuck Berry. The record represents humanity's attempt to communicate with potential extraterrestrial civilizations and serves as a time capsule of human culture and achievement.`,
      metadata: {
        source: 'Voyager Mission',
        category: 'space-exploration',
        title: 'Voyager Golden Record',
        text: 'Voyager Golden Record contents and purpose',
      },
    },
    {
      id: 'scientific-skepticism',
      content: `Carl Sagan was a passionate advocate for scientific skepticism and critical thinking. In his 1995 book "The Demon-Haunted World: Science as a Candle in the Dark," Sagan argued that science is not just a body of knowledge, but a way of thinking. He emphasized the importance of questioning claims, demanding evidence, and being open to changing one's mind in the face of new evidence. Sagan coined the phrase "extraordinary claims require extraordinary evidence" and developed the "Baloney Detection Kit," a set of tools for critical thinking that includes: independent confirmation of facts, debate from knowledgeable proponents of all points of view, quantification, consideration of multiple hypotheses, and the principle that if there's a chain of argument, every link in the chain must work. Sagan believed that scientific literacy was essential for a functioning democracy and that the scientific method was humanity's best tool for understanding the universe and solving problems.`,
      metadata: {
        source: 'The Demon-Haunted World',
        category: 'philosophy',
        title: 'Scientific Skepticism',
        text: 'Carl Sagan scientific skepticism and critical thinking',
      },
    },
    {
      id: 'cosmic-perspective',
      content: `Carl Sagan's cosmic perspective was a fundamental aspect of his worldview and teaching. He believed that understanding our place in the cosmos was essential for human civilization. Sagan often used the "cosmic calendar" metaphor, compressing the 13.8 billion years of cosmic history into a single year, with the Big Bang occurring on January 1st and human civilization emerging in the final seconds of December 31st. This perspective emphasizes both the vastness of cosmic time and the preciousness of human existence. Sagan frequently quoted the ancient Greek philosopher Democritus: "Nothing exists except atoms and empty space; everything else is opinion." He emphasized that we are made of "star-stuff" - the atoms in our bodies were forged in the hearts of stars that lived and died before our Sun was born. This cosmic perspective, Sagan argued, should inspire both humility and wonder, helping us to see beyond petty differences and recognize our shared humanity and the preciousness of our planet.`,
      metadata: {
        source: 'Cosmic Philosophy',
        category: 'philosophy',
        title: 'Cosmic Perspective',
        text: 'Carl Sagan cosmic perspective and worldview',
      },
    },
    {
      id: 'planetary-science',
      content: `Carl Sagan made fundamental contributions to planetary science throughout his career. He was a key figure in NASA's planetary exploration missions, including Mariner, Viking, Voyager, and Galileo. Sagan's research on Venus revealed the planet's extreme greenhouse effect, with surface temperatures hot enough to melt lead. His work on Mars helped identify seasonal changes and the possibility of past water on the planet. Sagan was instrumental in the Viking missions to Mars, which included the first successful landings on the planet and experiments to search for microbial life. He also studied the atmospheres of Jupiter and Saturn and their moons. Sagan's research on planetary atmospheres and the greenhouse effect on Earth helped lay the groundwork for modern climate science. His work demonstrated how studying other planets could help us understand our own world and the potential for life elsewhere in the solar system.`,
      metadata: {
        source: 'Planetary Research',
        category: 'planetary-science',
        title: 'Planetary Science Contributions',
        text: 'Carl Sagan planetary science research and discoveries',
      },
    },
    {
      id: 'climate-science',
      content: `Carl Sagan was an early advocate for understanding and addressing climate change. His research on the greenhouse effect on Venus provided crucial insights into how atmospheric gases can trap heat and dramatically alter a planet's climate. Sagan recognized that human activities were beginning to affect Earth's atmosphere and climate, and he warned about the potential consequences of unchecked greenhouse gas emissions. In the 1980s, Sagan was involved in research on "nuclear winter" - the potential global cooling effect that could result from a large-scale nuclear war. This research demonstrated how human activities could have global environmental impacts. Sagan emphasized that understanding Earth's climate required a planetary perspective, studying our world as one planet among many. He advocated for international cooperation to address environmental challenges and believed that scientific understanding was essential for making informed decisions about Earth's future.`,
      metadata: {
        source: 'Climate Research',
        category: 'environmental-science',
        title: 'Climate Science and Environmental Awareness',
        text: 'Carl Sagan climate science research and environmental advocacy',
      },
    },
    {
      id: 'space-exploration',
      content: `Carl Sagan was a passionate advocate for space exploration throughout his life. He believed that exploring space was essential for understanding our place in the cosmos and for the long-term survival of human civilization. Sagan was involved in numerous NASA missions, including the Mariner missions to Venus and Mars, the Viking landers on Mars, the Voyager missions to the outer planets, and the Galileo mission to Jupiter. He helped design experiments to search for life on Mars and was instrumental in the development of the Pioneer plaque and Voyager Golden Record. Sagan advocated for human missions to Mars and the establishment of permanent human settlements in space. He believed that space exploration could inspire new generations of scientists and engineers, foster international cooperation, and provide new perspectives on Earth and humanity. Sagan emphasized that space exploration was not just about scientific discovery, but about the human spirit of adventure and the desire to understand our origins and destiny.`,
      metadata: {
        source: 'Space Advocacy',
        category: 'space-exploration',
        title: 'Space Exploration Advocacy',
        text: 'Carl Sagan space exploration advocacy and involvement',
      },
    },
    {
      id: 'science-communication',
      content: `Carl Sagan was a master of science communication, able to explain complex scientific concepts in ways that were accessible, engaging, and inspiring to people of all ages and backgrounds. His approach combined rigorous scientific accuracy with poetic language and vivid analogies. Sagan believed that science was too important to be left to scientists alone - it needed to be shared with everyone. He used television, books, lectures, and public appearances to bring the wonders of science to millions of people worldwide. Sagan's communication style was characterized by his sense of wonder, his ability to connect scientific concepts to human experience, and his use of the "Ship of the Imagination" to travel through space and time. He emphasized that science was not just a collection of facts, but a way of thinking that could help people make better decisions in their daily lives. Sagan's legacy as a science communicator continues to inspire scientists and educators today.`,
      metadata: {
        source: 'Science Communication',
        category: 'education',
        title: 'Science Communication Legacy',
        text: 'Carl Sagan science communication approach and impact',
      },
    },
    {
      id: 'future-humanity',
      content: `Carl Sagan was deeply concerned about the future of humanity and our planet. He believed that human civilization faced critical challenges, including nuclear weapons, environmental degradation, and the need to develop sustainable ways of living on Earth. Sagan advocated for international cooperation to address global challenges and believed that scientific understanding was essential for making informed decisions about our future. He envisioned a future in which humanity would expand into space, establishing settlements on other worlds and continuing the exploration of the cosmos. Sagan emphasized that the choices we make today would determine whether human civilization would survive and thrive or face collapse. He believed that education, scientific literacy, and critical thinking were essential for creating a better future. Sagan's vision of humanity's future was both realistic about the challenges we face and optimistic about our potential to overcome them through reason, cooperation, and the spirit of discovery.`,
      metadata: {
        source: 'Future Vision',
        category: 'philosophy',
        title: 'Future of Humanity',
        text: 'Carl Sagan vision for humanity future and challenges',
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
      return "I'm Carl, an AI assistant inspired by the spirit and knowledge of Carl Sagan. I can help you explore the cosmos, understand science, and discover the wonders of the universe. Feel free to ask me anything about astronomy, space exploration, scientific skepticism, or any topic that Carl Sagan would discuss!";
    }

    return relevantDocs.map(doc => doc.content).join('\n\n');
  }
}