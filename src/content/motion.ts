export type MotionBucket = 'Ambient' | 'Feedback' | 'Celebration' | 'Transition';

export interface Keyframe { name: string; timing: string; usedFor: string; bucket: MotionBucket; demo?: boolean }

export const BUCKET_NOTES: Record<MotionBucket, string> = {
  Ambient: 'Idle, no user action. Plays without being asked.',
  Feedback: 'Responds to what the learner just did.',
  Celebration: 'A genuine win. Earned, never decorative.',
  Transition: 'Moving between screens. Gets out of the way as fast as it can.',
};

export const KEYFRAMES: Keyframe[] = [
  { name: 'float', timing: '3.6s infinite', usedFor: "Musa's idle state, anywhere he's just present on screen", bucket: 'Ambient', demo: true },
  { name: 'nodeBounce', timing: '2.2s infinite', usedFor: 'Drawing the eye to the next lesson node on the path', bucket: 'Ambient', demo: true },
  { name: 'bossPulse', timing: '1.8s infinite', usedFor: 'Milestone and boss-level nodes, idle', bucket: 'Ambient', demo: true },
  { name: 'countBump', timing: '.4s', usedFor: 'XP and streak counters incrementing', bucket: 'Feedback', demo: true },
  { name: 'pulseGlow', timing: '.9s', usedFor: 'Drawing attention to a newly claimable reward', bucket: 'Feedback', demo: true },
  { name: 'confettiFall', timing: 'variable', usedFor: 'Track completion, big milestones', bucket: 'Celebration' },
  { name: 'trophyBurst', timing: '.7s', usedFor: 'Badge or achievement reveal', bucket: 'Celebration', demo: true },
  { name: 'starPop', timing: '.4s', usedFor: 'Perfect-lesson star rating', bucket: 'Celebration', demo: true },
  { name: 'screenIn', timing: '.32s ease-out', usedFor: 'Full-screen transitions between lessons', bucket: 'Transition' },
  { name: 'sheetUp / sheetPop', timing: '.3s ease-out', usedFor: 'Bottom sheets: answer feedback, track details', bucket: 'Transition' },
];
