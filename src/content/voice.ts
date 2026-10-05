export const PRINCIPLES = [
  { k: "Guide, don't gatekeep", v: 'Learning stays open and supportive: no walls where a nudge would do.' },
  { k: 'Progress feels tangible', v: 'XP, path nodes and badges make growth visible, not just counted somewhere.' },
  { k: 'Identity feels natural', v: "South African culture lives in Musa's details. It doesn't get painted across the UI." },
  { k: 'Softness over punishment', v: 'A wrong answer is feedback, not a failure state.' },
  { k: 'Character over decoration', v: "Musa communicates on purpose. He's never just sitting in a corner." },
  { k: 'Delight never blocks', v: 'Motion, sound and rewards add warmth. Nothing ever waits on them.' },
] as const;

export const MISSION = "Musa is your learning companion who guides you through South Africa's history, geography, science, languages and civics.";
export const TAGLINE = 'Never a teacher. Always a guide.';

export interface VoicePillar { title: string; body: string; say: string; dont: string }

export const VOICE_PILLARS: VoicePillar[] = [
  { title: 'Guide, not teacher', body: 'We point things out and let the learner arrive at it. No red pen, no grading tone.', say: "You've got this. Try again.", dont: 'Incorrect.' },
  { title: 'Warm, not childish', body: 'Plain, encouraging language for a general audience. Not baby talk, not exclamation-mark stacking.', say: "Nice, that's the second time this week.", dont: 'WOW!! Super duper job!!!' },
  { title: 'Proudly South African, not kitsch', body: 'Real references, used in context. Not flag decoration or stock "rainbow nation" language.', say: 'This is the mountain Capetonians call Table Mountain.', dont: 'Welcome to the Rainbow Nation!' },
  { title: 'Grounded, not trivia-hollow', body: 'Every fact earns a "why this matters". The lesson format is built around that pairing, not a quiz gate.', say: 'A key fact, then why it still matters today.', dont: 'A date and a name with no context.' },
];

export const VALUES = [
  { k: 'Learning over testing', v: 'No placement assessment gate. Lessons open with a key fact and close with why it matters, not a quiz you have to pass to proceed.' },
  { k: 'A guide, not a gatekeeper', v: 'One full track, History of South Africa, is free to explore before anyone creates an account.' },
  { k: 'Built on real content', v: 'Grounded in a recovered archive of 8 tracks, about 169 lessons and 845 quiz questions, not placeholder copy.' },
  { k: 'Pride, used sparingly', v: "The flag's colours live in Musa's scarf. They're a detail, not the UI's load-bearing palette." },
] as const;

export const NAMING = [
  { name: 'HoneyGuide', body: "Named for the greater honeyguide bird, known across Southern Africa for leading people to wild beehives. It shows the way; it doesn't do the work for you. That's the whole product thesis in one animal." },
  { name: 'Musa', body: "The mascot's name and its story haven't been formally written up yet. Placeholder: worth a short paragraph here once that's settled (meaning, pronunciation, why this name for this bird)." },
] as const;

export const WRITING_RULES = [
  { title: 'Buttons are imperative and specific', body: '"Start lesson," not "Submit" or "Go." The label says exactly what happens next.' },
  { title: 'Wrong answers get the right answer back', body: 'Encouragement plus the correct answer, restated. Never just "Wrong."' },
  { title: 'Empty states are an invitation', body: 'Say what is missing and what to do about it. Never a dead end with no next step.' },
  { title: 'One exclamation mark, max', body: 'Never stack enthusiasm across a whole message. It reads as hollow, not warm.' },
] as const;

export const BEFORE_AFTER = [
  { before: 'Submission failed. Please try again.', after: "That didn't save. Give it another go." },
  { before: 'No data available.', after: 'Nothing here yet. Start your first lesson to see progress.' },
  { before: 'Incorrect! Try harder!!', after: "Not quite. It's actually Pretoria. You'll get the next one." },
] as const;

export const SOUND_PRINCIPLES = [
  { title: 'Short, never startling', body: 'Sub-second cues at a volume appropriate for a classroom or a bus ride. Nothing that makes a phone bark out loud.' },
  { title: 'No buzzer for wrong answers', body: 'A gentle, neutral tone, never an alarm or error buzzer. Matches the "guide, not teacher" voice value.' },
  { title: 'One triumphant motif', body: 'Reused for streak-saves, badge unlocks and track completions, so it becomes recognisable rather than novel each time.' },
  { title: 'Muted by default is fine', body: 'Sound should add delight, not be load-bearing. Every cue needs a silent equivalent (motion, copy) that works alone.' },
] as const;
