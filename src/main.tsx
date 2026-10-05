import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { App } from '@/App';
import '@/styles/tokens.css';
import '@/styles/clay.css';
import '@/styles/motion.css';
import '@/styles/docs.css';

createRoot(document.getElementById('root')!).render(<StrictMode><App /></StrictMode>);
