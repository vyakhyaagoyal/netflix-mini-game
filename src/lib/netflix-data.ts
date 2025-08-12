
export interface NetflixCharacter {
  name: string;
  series: string;
  genre: string;
  personality: string;
  humorousCliffhanger: string;
  traits: string[];
}

export const NETFLIX_CHARACTERS: NetflixCharacter[] = [
  {
    name: "The Professor (Sergio Marquina)",
    series: "Money Heist",
    genre: "Crime Thriller",
    personality: "You're the ultimate strategist who thinks 10 moves ahead while everyone else is playing checkers. Methodical, brilliant, and always has a Plan B (and C, D, E...). You see patterns others miss and turn chaos into calculated success.",
    humorousCliffhanger: "Will you finally execute the perfect plan to organize your life, or will you spend another hour creating a color-coded spreadsheet for your grocery list?",
    traits: ["strategic", "analytical", "perfectionist", "introverted", "methodical"]
  },
  {
    name: "Wednesday Addams", 
    series: "Wednesday",
    genre: "Dark Comedy",
    personality: "Sharp-tongued, brutally honest, and allergic to fake enthusiasm. You see through people's facades instantly and aren't afraid to call out the nonsense. Your deadpan delivery could cut glass.",
    humorousCliffhanger: "Will you survive another day of forced small talk, or will your eye rolls finally generate enough energy to power a small town?",

    traits: ["sarcastic", "independent", "observant", "cynical", "authentic"]
  },
  {
    name: "Joe Goldberg",
    series: "You", 
    genre: "Psychological Thriller",
    personality: "Intensely focused and observant, you notice details others miss. You're passionate about your interests and can get deeply absorbed in projects (maybe too deeply). You analyze people like they're fascinating puzzles.",
    humorousCliffhanger: "Will you finally stop stalking your crush's Instagram stories at 2 AM, or will you accidentally like a photo from 2019 again?",

    traits: ["obsessive", "analytical", "passionate", "introverted", "detail-oriented"]
  },
  {
    name: "Eleven",
    series: "Stranger Things",
    genre: "Sci-Fi Drama", 
    personality: "Quietly powerful with a fierce loyalty to your inner circle. You might feel like an outsider sometimes, but when it matters most, you're the one everyone counts on. Your strength surprises people.",
    humorousCliffhanger: "Will you finally master the art of making friends without accidentally moving objects with your mind... or your intense stare?",

    traits: ["loyal", "powerful", "introverted", "protective", "misunderstood"]
  },
  {
    name: "Harvey Specter",
    series: "Suits",
    genre: "Legal Drama",
    personality: "Confidence is your superpower and winning is your addiction. You dress like you own the world because, let's be honest, you basically do. Charismatic, sharp, and you don't just want to win - you want to win in style.",
    humorousCliffhanger: "Will you finally find an outfit that doesn't make everyone else look underdressed, or will you continue being the reason for everyone's wardrobe insecurity?",

    traits: ["confident", "charismatic", "ambitious", "competitive", "stylish"]
  },
  {
    name: "Devi Vishwakumar",
    series: "Never Have I Ever", 
    genre: "Teen Comedy-Drama",
    personality: "Your life is a beautiful whirlwind of big dreams, bigger emotions, and impressively creative disasters. You feel everything intensely and turn the smallest moments into epic internal dramas.",
    humorousCliffhanger: "Will you finally make a decision without creating a pro/con list that's longer than your Netflix queue, or will tomorrow bring another existential crisis over choosing a snack?",

    traits: ["dramatic", "emotional", "ambitious", "impulsive", "passionate"]
  },
  {
    name: "Klaus Hargreeves",
    series: "The Umbrella Academy", 
    genre: "Superhero Comedy-Drama",
    personality: "You're beautifully chaotic and unapologetically yourself. Life's too short to be normal, so you choose to be fabulous instead. You turn everyday situations into adventures nobody asked for but everyone secretly enjoys.",
    humorousCliffhanger: "Will you finally get your act together, or will you discover yet another creative way to turn a simple coffee run into a three-hour odyssey?",

    traits: ["chaotic", "creative", "free-spirited", "dramatic", "unpredictable"]
  },
  {
    name: "Thomas Shelby",
    series: "Peaky Blinders",
    genre: "Crime Drama", 
    personality: "Quietly intense and mysteriously compelling. You command respect without raising your voice and have perfected the art of the meaningful stare. People either want to be you or are slightly afraid of you.",
    humorousCliffhanger: "Will you finally reveal what's behind that mysterious brooding expression, or will you continue making people wonder if you're planning their birthday party or their demise?",

    traits: ["mysterious", "intense", "strategic", "leadership", "brooding"]
  },
  {
    name: "Rachel Green",
    series: "Friends", 
    genre: "Sitcom",
    personality: "Fashionable, loyal, and your life feels like a sitcom full of relationship drama and amazing friendships. You're the friend everyone comes to for style advice and emotional support (not necessarily in that order).",
    humorousCliffhanger: "Will you finally stop changing your mind about what you want from life, or will you pivot again after watching one inspiring TikTok?",

    traits: ["fashionable", "social", "loyal", "indecisive", "caring"]
  },
  {
    name: "Otis Milburn",
    series: "Sex Education",
    genre: "Teen Comedy-Drama", 
    personality: "Awkwardly wise beyond your years, you're the friend everyone turns to for advice even though your own life is a beautiful mess. You have great insights for others but struggle to apply them to yourself.",
    humorousCliffhanger: "Will you finally take your own excellent advice, or will you continue being the therapist friend who can solve everyone's problems except your own?",

    traits: ["empathetic", "wise", "awkward", "helpful", "self-doubting"]
  },
  {
    name: "Jim Halpert",
    series: "The Office",
    genre: "Comedy",
    personality: "You're the master of subtle humor and perfectly timed pranks. You make boring situations entertaining and have perfected the art of the knowing look to the camera of life.",
    humorousCliffhanger: "Will you finally run out of creative ways to entertain yourself during meetings, or will you discover an even more elaborate way to mess with your coworkers' minds?",

    traits: ["humorous", "creative", "observant", "mischievous", "relatable"]
  }
];

// Rotating quiz questions that change every time
export const QUIZ_QUESTIONS = [
  // Set 1
  [
    {
      question: "It's Friday night and you have no plans. What's your ideal evening?",
      options: [
        "Netflix, snacks, and absolutely zero social interaction",
        "Calling up friends and causing some harmless chaos",
        "Planning next week's world domination strategy",
        "Reading a book or having deep conversations until 3 AM"
      ]
    },
    {
      question: "Your friend group is having drama. What's your role?",
      options: [
        "The detective gathering intel from all sides",
        "Grabbing popcorn and watching the chaos unfold",
        "The therapist trying to fix everything",
        "Disappearing until it all blows over"
      ]
    },
    {
      question: "What motivates you most in life?",
      options: [
        "Success, money, and looking flawless while achieving it",
        "Love, family, and meaningful connections",
        "Power, respect, and being the smartest in the room",
        "Adventure, mystery, and proving everyone wrong"
      ]
    }
  ],
  // Set 2
  [
    {
      question: "How do you handle stress?",
      options: [
        "Create a detailed plan with backup plans for the backup plans",
        "Make sarcastic comments until someone laughs",
        "Call someone and talk through every possible scenario",
        "Brood mysteriously while staring into the distance"
      ]
    },
    {
      question: "What's your biggest weakness?",
      options: [
        "Overthinking everything until it's too late to act",
        "Caring too much about what others think",
        "Getting obsessed with projects and ignoring everything else",
        "Being too honest for most people's comfort"
      ]
    },
    {
      question: "In a group project, you're the one who:",
      options: [
        "Takes charge and delegates tasks efficiently",
        "Comes up with the most creative (and chaotic) ideas",
        "Makes sure everyone feels included and heard",
        "Does most of the work alone because you don't trust others"
      ]
    }
  ],
  // Set 3
  [
    {
      question: "Your perfect vacation would be:",
      options: [
        "A luxury resort where everything is planned and perfect",
        "Backpacking through Europe with no itinerary",
        "A cozy cabin with your closest friends",
        "Somewhere remote where no one can find you"
      ]
    },
    {
      question: "People always tell you that you're:",
      options: [
        "Intimidatingly put-together",
        "Exhaustingly dramatic but entertaining",
        "The most reliable person they know",
        "Impossible to read"
      ]
    },
    {
      question: "Your ideal superpower would be:",
      options: [
        "Mind control (for efficient decision-making, obviously)",
        "Time manipulation (to undo all your embarrassing moments)",
        "Telepathy (to know what everyone really thinks)",
        "Invisibility (to avoid all human interaction)"
      ]
    }
  ]
];

// Advanced character matching based on personality traits
export function getCharacterFromAnswers(dailyInputs: string[], quizAnswers: string[]): NetflixCharacter {
  const traitScores = {
    strategic: 0,
    analytical: 0,
    confident: 0,
    chaotic: 0,
    social: 0,
    mysterious: 0,
    dramatic: 0,
    humorous: 0,
    empathetic: 0,
    independent: 0
  };

  // Analyze daily inputs for personality indicators
  const inputText = dailyInputs.join(" ").toLowerCase();
  
  // Strategic/Analytical keywords
  if (inputText.match(/plan|organize|strategy|think|analyze|work|business|structure/)) {
    traitScores.strategic += 2;
    traitScores.analytical += 1;
  }
  
  // Social keywords
  if (inputText.match(/friends|party|social|people|group|team|family|together/)) {
    traitScores.social += 2;
    traitScores.empathetic += 1;
  }
  
  // Chaotic/Dramatic keywords
  if (inputText.match(/crazy|wild|drama|emotional|intense|overwhelming|chaotic/)) {
    traitScores.chaotic += 2;
    traitScores.dramatic += 1;
  }
  
  // Independent/Mysterious keywords
  if (inputText.match(/alone|quiet|myself|independent|solo|private|secret/)) {
    traitScores.independent += 2;
    traitScores.mysterious += 1;
  }

  // Analyze quiz answers with more nuanced scoring
  quizAnswers.forEach((answer) => {
    const lowerAnswer = answer.toLowerCase();
    
    // Pattern matching for different traits
    if (lowerAnswer.includes("plan") || lowerAnswer.includes("strategy") || lowerAnswer.includes("control")) {
      traitScores.strategic += 3;
      traitScores.analytical += 2;
    }
    
    if (lowerAnswer.includes("chaos") || lowerAnswer.includes("dramatic") || lowerAnswer.includes("emotional")) {
      traitScores.chaotic += 3;
      traitScores.dramatic += 2;
    }
    
    if (lowerAnswer.includes("social") || lowerAnswer.includes("friends") || lowerAnswer.includes("group")) {
      traitScores.social += 3;
      traitScores.empathetic += 2;
    }
    
    if (lowerAnswer.includes("mysterious") || lowerAnswer.includes("alone") || lowerAnswer.includes("disappear")) {
      traitScores.mysterious += 3;
      traitScores.independent += 2;
    }
    
    if (lowerAnswer.includes("sarcastic") || lowerAnswer.includes("honest") || lowerAnswer.includes("popcorn")) {
      traitScores.humorous += 3;
    }
    
    if (lowerAnswer.includes("luxury") || lowerAnswer.includes("perfect") || lowerAnswer.includes("intimidating")) {
      traitScores.confident += 3;
    }
  });

  // Find best character match based on trait alignment
  let bestMatch = NETFLIX_CHARACTERS[0];
  let highestScore = -1;

  NETFLIX_CHARACTERS.forEach(character => {
    let score = 0;
    character.traits.forEach(trait => {
      if (traitScores[trait as keyof typeof traitScores] !== undefined) {
        score += traitScores[trait as keyof typeof traitScores];
      }
    });
    
    // Add some randomness to avoid always getting the same result
    score += Math.random() * 2;
    
    if (score > highestScore) {
      highestScore = score;
      bestMatch = character;
    }
  });

  return bestMatch;
}

// Function to get random quiz questions
export function getRandomQuizQuestions() {
  const randomSet = Math.floor(Math.random() * QUIZ_QUESTIONS.length);
  return QUIZ_QUESTIONS[randomSet];
}