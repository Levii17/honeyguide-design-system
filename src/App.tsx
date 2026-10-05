import { ToastProvider } from '@/components/Toast';
import { Layout } from '@/components/Layout';
import { asset } from '@/lib/asset';
import { AccessibilitySection } from '@/sections/AccessibilitySection';
import { Illustration, Musa } from '@/sections/Character';
import { ComponentsSection } from '@/sections/ComponentsSection';
import { Motion, Rewards, Sounds, Writing } from '@/sections/Experience';
import { Brand, Colors, IconsSection, Principles, Typography } from '@/sections/Foundations';

export function App() {
  return (
    <ToastProvider>
      <Layout>
        <header className="hero">
          <div>
            <div className="eyebrow">HoneyGuide design system</div>
            <h1>A guide, not a gatekeeper.</h1>
            <p className="lead">Tokens, components, motion, voice and accessibility for HoneyGuide, the South African learning app guided by Musa the Honeyguide.</p>
          </div>
          <div className="hero-art"><img src={asset('musa/appicon.webp')} alt="Musa the Honeyguide app icon" width={280} height={280} /></div>
        </header>
        <Principles />
        <Brand />
        <Colors />
        <Typography />
        <IconsSection />
        <Musa />
        <Illustration />
        <ComponentsSection />
        <Motion />
        <Rewards />
        <Sounds />
        <Writing />
        <AccessibilitySection />
        <footer className="site-foot">
          HoneyGuide design system · built with React, TypeScript and Vite ·
          <a className="portfolio-link" href="https://mxolisi.is-a.dev/" target="_blank" rel="noreferrer">Built by Mxolisi</a>
        </footer>
      </Layout>
    </ToastProvider>
  );
}
