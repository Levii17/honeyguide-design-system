import { H3, Section } from '@/components/ui';
import { AnswerSpecimens, BadgeAndLeaderboard, ButtonSpecimens, CardAndChipSpecimens, ProgressAndToggle, RadiiAndShadows, SpacingScale } from '@/components/Specimens';

export function ComponentsSection() {
  return (
    <Section id="components" title="Components" lead="Live specimens, not screenshots. This is the actual clay-shadow system running in the app, so every state is interactive.">
      <SpacingScale />
      <RadiiAndShadows />
      <H3>Buttons</H3>
      <ButtonSpecimens />
      <H3>Cards, chips and stats</H3>
      <CardAndChipSpecimens />
      <ProgressAndToggle />
      <H3>Quiz answers</H3>
      <AnswerSpecimens />
      <H3>Badges and leaderboard</H3>
      <BadgeAndLeaderboard />
    </Section>
  );
}
