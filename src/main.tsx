import gsap from 'gsap';
import { MorphSVGPlugin } from 'gsap/MorphSVGPlugin';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';

gsap.registerPlugin(MorphSVGPlugin);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
  <App />
  </StrictMode>,
)
