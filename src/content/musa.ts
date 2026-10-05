export const EXPRESSIONS = [
  { name: 'Happy', moment: 'Lesson complete' },
  { name: 'Celebrating', moment: 'Streak milestone' },
  { name: 'Excited', moment: 'New track unlocked' },
  { name: 'Curious', moment: 'Track intro' },
  { name: 'Thinking', moment: 'Content loading' },
  { name: 'Encouraging', moment: 'Wrong answer' },
  { name: 'Confused', moment: 'Used sparingly, paired with a hint' },
  { name: 'Sleepy', moment: 'Re-engagement nudge' },
  { name: 'Determined', moment: 'Mid-streak' },
  { name: 'Proud', moment: 'Hard lesson cleared' },
] as const;

export const MUSA_DOS = [
  'Keep the scarf on in every context.',
  "Let Musa's expression carry the emotional weight instead of adding !! or CAPS for emphasis.",
  'Use Musa to soften hard moments: a wrong answer, an empty state, a lost streak.',
];

export const MUSA_DONTS = [
  'Invent a new expression without adding it here first.',
  'Use Musa in account, payment or legal contexts. Those need a plainer, non-mascot tone.',
  'Recolour the scarf outside the brand palette, or crop or stretch him off-model.',
];

export const CLIPS = [
  { id: 'idle', title: 'Idle', use: 'Resting loop, no user action' },
  { id: 'reading', title: 'Reading', use: 'Lesson content loading or in progress' },
  { id: 'walking', title: 'Walking', use: 'Transitions between screens or tracks' },
  { id: 'waving', title: 'Waving', use: 'Greeting, onboarding, sign-off moments' },
] as const;

export interface Figure { file: string; alt: string; title: string; caption?: string }

export const MUSA_FIGURES: Figure[] = [
  { file: 'musa', alt: 'Musa the Honeyguide character sheet', title: 'Character sheet' },
  { file: 'expressions', alt: "Musa's 15 expressions", title: 'Expressions (15)', caption: 'Every expression maps to a real product moment. None are negative toward the learner. The closest Musa gets to "wrong answer" is Encouraging or Confused, played gently.' },
  { file: 'poses', alt: 'Musa poses', title: 'Poses' },
  { file: 'unlockable-accessories-1', alt: 'Musa unlockable accessories', title: 'Unlockable accessories', caption: "Accessories tie directly into the badge system. They're earned, not cosmetic filler." },
  { file: 'unlockable-accessories-2', alt: 'Musa dressed in unlockable accessories', title: 'Accessories, worn' },
  { file: 'turnaround', alt: 'Musa turnaround sheet', title: 'Turnaround', caption: 'Reference for any future 3D, AR or animated use.' },
];

export const ILLUSTRATION_FIGURES: Figure[] = [
  { file: 'sticker-pack', alt: 'Musa sticker pack examples', title: 'Sticker pack', caption: "The sticker set mirrors Musa's 15 expressions for shareable, in-app moments." },
  { file: 'badges', alt: 'Badges', title: 'Badges' },
  { file: 'scarf-details', alt: 'South African inspired scarf trim', title: 'Scarf details', caption: 'Ndebele-inspired geometric trim, SA colours used as a detail, not a backdrop.' },
];

export const LADDER = [
  { level: 1, name: 'Explorer Scarf' },
  { level: 10, name: 'SA Stripes Unlocked' },
  { level: 25, name: 'Geometric Trim' },
  { level: 50, name: 'Protea Badge' },
  { level: 100, name: 'Master Explorer' },
] as const;

export const PROGRESSION_FIGURE: Figure = { file: 'progression-system', alt: "Musa's badge evolution ladder", title: 'Badge evolution ladder' };
