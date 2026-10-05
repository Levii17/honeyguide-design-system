import {
  Apple, ArrowLeft, ArrowRight, Bell, BookOpen, Check, ChartColumn, ChevronRight, Coins, Crown, Flag,
  Flame, Gem, Globe, Hand, Heart, House, Info, KeyRound, Landmark, Leaf, Lightbulb, Lock, MessageCircle,
  Medal, Map as MapIcon, PawPrint, Play, RefreshCw, Route, Scale, ScrollText, Search, Settings, ShieldCheck,
  Sparkles, Star, Target, Trophy, UserRound, Users, Vote, X, type LucideIcon,
} from 'lucide-react';

export type IconCategory = 'Navigation' | 'Rewards' | 'Learning' | 'Civics' | 'Actions' | 'Status';

export interface IconEntry { name: string; Icon: LucideIcon; category: IconCategory; usage: string }

/** Mirrors the icon registry in the HoneyGuide app (components/ui/Icon.tsx). */
export const ICON_REGISTRY: IconEntry[] = [
  { name: 'home', Icon: House, category: 'Navigation', usage: 'Home tab' },
  { name: 'path', Icon: Route, category: 'Navigation', usage: 'Learn tab' },
  { name: 'trophy', Icon: Trophy, category: 'Navigation', usage: 'Challenge tab, leaderboard' },
  { name: 'refresh', Icon: RefreshCw, category: 'Navigation', usage: 'Review tab' },
  { name: 'user', Icon: UserRound, category: 'Navigation', usage: 'Profile tab' },
  { name: 'gear', Icon: Settings, category: 'Navigation', usage: 'Settings' },
  { name: 'arrowL', Icon: ArrowLeft, category: 'Navigation', usage: 'Back' },
  { name: 'arrowR', Icon: ArrowRight, category: 'Navigation', usage: 'Next' },
  { name: 'chevronR', Icon: ChevronRight, category: 'Navigation', usage: 'Row disclosure' },
  { name: 'search', Icon: Search, category: 'Navigation', usage: 'Search trails' },
  { name: 'flame', Icon: Flame, category: 'Rewards', usage: 'Streak' },
  { name: 'heart', Icon: Heart, category: 'Rewards', usage: 'Hearts (lives)' },
  { name: 'gem', Icon: Gem, category: 'Rewards', usage: 'XP' },
  { name: 'star', Icon: Star, category: 'Rewards', usage: 'Perfect-lesson rating' },
  { name: 'crown', Icon: Crown, category: 'Rewards', usage: 'Boss quiz, legendary' },
  { name: 'medal', Icon: Medal, category: 'Rewards', usage: 'Achievements' },
  { name: 'target', Icon: Target, category: 'Rewards', usage: 'Daily goal' },
  { name: 'sparkles', Icon: Sparkles, category: 'Rewards', usage: 'New and unlocked' },
  { name: 'book', Icon: BookOpen, category: 'Learning', usage: 'Lessons' },
  { name: 'scroll', Icon: ScrollText, category: 'Learning', usage: 'History trail' },
  { name: 'map', Icon: MapIcon, category: 'Learning', usage: 'Geography trail' },
  { name: 'globe', Icon: Globe, category: 'Learning', usage: 'Languages and culture' },
  { name: 'leaf', Icon: Leaf, category: 'Learning', usage: 'Wildlife and nature' },
  { name: 'meerkat', Icon: PawPrint, category: 'Learning', usage: 'Animals' },
  { name: 'bulb', Icon: Lightbulb, category: 'Learning', usage: 'Hints and tips' },
  { name: 'chart', Icon: ChartColumn, category: 'Learning', usage: 'Stats, economy' },
  { name: 'vote', Icon: Vote, category: 'Civics', usage: 'Elections' },
  { name: 'scale', Icon: Scale, category: 'Civics', usage: 'Justice' },
  { name: 'parliament', Icon: Landmark, category: 'Civics', usage: 'Government' },
  { name: 'users', Icon: Users, category: 'Civics', usage: 'Community' },
  { name: 'coin', Icon: Coins, category: 'Civics', usage: 'Money' },
  { name: 'flag', Icon: Flag, category: 'Civics', usage: 'National symbols' },
  { name: 'check', Icon: Check, category: 'Status', usage: 'Done, correct' },
  { name: 'x', Icon: X, category: 'Status', usage: 'Close, incorrect' },
  { name: 'lock', Icon: Lock, category: 'Status', usage: 'Locked content' },
  { name: 'play', Icon: Play, category: 'Actions', usage: 'Start lesson' },
  { name: 'bell', Icon: Bell, category: 'Actions', usage: 'Reminders' },
  { name: 'key', Icon: KeyRound, category: 'Actions', usage: 'Password' },
  { name: 'shield', Icon: ShieldCheck, category: 'Actions', usage: 'Privacy' },
  { name: 'chat', Icon: MessageCircle, category: 'Actions', usage: 'Feedback' },
  { name: 'wave', Icon: Hand, category: 'Actions', usage: 'Greeting' },
  { name: 'apple', Icon: Apple, category: 'Actions', usage: 'Apple sign-in' },
  { name: 'info', Icon: Info, category: 'Status', usage: 'Why this matters' },
];

export const ICON_CATEGORIES: IconCategory[] = ['Navigation', 'Rewards', 'Learning', 'Civics', 'Actions', 'Status'];
