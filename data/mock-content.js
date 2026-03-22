export const featureCards = [
  {
    title: 'Smart summaries',
    description: 'Turn long lessons into clear bullet points, key ideas, and quick revision notes.',
    badge: 'Fast understanding'
  },
  {
    title: 'Flashcards that stick',
    description: 'Practice question-answer cards with an interactive flip experience and spaced review feel.',
    badge: 'Memory boost'
  },
  {
    title: 'Tests with instant feedback',
    description: 'Generate MCQs and short-answer quizzes that feel like real exam practice.',
    badge: 'Exam prep'
  }
];

export const sidebarItems = ['Upload Content', 'Flashcards', 'Summaries', 'Tests', 'Profile'];

export const mockSummary = {
  title: 'The Nile River Civilization',
  bullets: [
    'Ancient Egyptians settled near the Nile because it gave them water, food, and fertile land.',
    'The annual flood left rich soil, which made farming easier and supported strong cities.',
    'Transport on the Nile helped trade, communication, and the movement of goods across Egypt.',
    'A stable food supply helped Egypt build a strong government, army, and culture.'
  ],
  keyIdeas: ['Fertile land', 'Trade route', 'Stable food supply', 'Growth of cities']
};

export const mockFlashcards = [
  {
    question: 'Why was the Nile River important to Ancient Egypt?',
    answer: 'Because it provided water, transportation, and fertile soil for farming.'
  },
  {
    question: 'What happened when the Nile flooded each year?',
    answer: 'It left behind rich black soil that helped crops grow.'
  },
  {
    question: 'How did the Nile help the Egyptian economy?',
    answer: 'It made trade and transport easier between different regions.'
  }
];

export const mockQuiz = [
  {
    prompt: 'What was the main farming benefit of the Nile flood?',
    options: ['It created mountains', 'It left fertile soil', 'It stopped trade', 'It dried the land'],
    answer: 'It left fertile soil'
  },
  {
    prompt: 'Which best explains why cities grew near the Nile?',
    options: ['Cold weather', 'Fertile land and water access', 'Less sunlight', 'No farming needed'],
    answer: 'Fertile land and water access'
  },
  {
    prompt: 'Short answer: name one way the Nile supported daily life.',
    type: 'short',
    answer: 'Water, farming, transport, or trade.'
  }
];

export const studySessions = [
  { subject: 'Science', topic: 'Electric circuits', savedAt: 'Today · 7:15 PM' },
  { subject: 'Arabic', topic: 'بلاغة - التشبيه', savedAt: 'Yesterday · 5:40 PM' },
  { subject: 'History', topic: 'Ancient Egypt', savedAt: 'Sun · 2:10 PM' }
];

export const plans = [
  '25 min summary review + 5 min break',
  '10 flashcards on key definitions',
  'Quick 5-question quiz before sleep'
];
