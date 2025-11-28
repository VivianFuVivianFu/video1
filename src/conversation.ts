export interface Message {
  id: number;
  sender: 'user' | 'luma';
  text: string;
  startTime: number; // in seconds
  typingDuration?: number; // only for Luma messages
}

export const conversation: Message[] = [
  {
    id: 1,
    sender: 'user',
    text: "I'm feeling overwhelmed with everything lately...",
    startTime: 1,
  },
  {
    id: 2,
    sender: 'luma',
    text: "I hear you. That feeling of being overwhelmed is your mind's way of signaling it needs support. Let's gently explore what's taking up the most space in your thoughts right now.",
    startTime: 2.5,
    typingDuration: 1,
  },
  {
    id: 3,
    sender: 'user',
    text: "Work deadlines and family expectations. I feel like I'm failing at both.",
    startTime: 9,
  },
  {
    id: 4,
    sender: 'luma',
    text: "The word 'failing' carries so much weight. When we're stretched thin, our inner critic often speaks louder than reality. Tell me — if a close friend came to you juggling these same challenges, would you see them as failing?",
    startTime: 10.5,
    typingDuration: 1,
  },
  {
    id: 5,
    sender: 'user',
    text: "No... I'd probably tell them they're doing their best.",
    startTime: 18,
  },
  {
    id: 6,
    sender: 'luma',
    text: "Exactly. That compassion you'd extend to others? You deserve it too. Our brains have a negativity bias — we notice what's undone rather than what we've accomplished.",
    startTime: 19.5,
    typingDuration: 1,
  },
  {
    id: 7,
    sender: 'user',
    text: "I made it to work on time and called my mom back.",
    startTime: 28,
  },
  {
    id: 8,
    sender: 'luma',
    text: "Those aren't small things — that's showing up for your responsibilities AND nurturing a relationship. The fact that you're still engaging shows tremendous resilience.",
    startTime: 29.5,
    typingDuration: 1,
  },
  {
    id: 9,
    sender: 'user',
    text: "I guess I never thought of it that way.",
    startTime: 38,
  },
  {
    id: 10,
    sender: 'luma',
    text: "That 'never enough' feeling often comes from early conditioning. But here's the truth: your worth isn't negotiable. It doesn't fluctuate with your productivity. You are inherently valuable.",
    startTime: 39.5,
    typingDuration: 1,
  },
];

export const endCardStartTime = 48; // seconds
