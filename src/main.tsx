import gsap from 'gsap';
import { MorphSVGPlugin } from 'gsap/MorphSVGPlugin';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';

import '@fontsource/chelsea-market/400.css';
import '@fontsource/im-fell-english/400-italic.css';
import '@fontsource/im-fell-english/400.css';
import '@fontsource/jaro/400.css';
import '@fontsource/jost/100.css';
import '@fontsource/jost/200.css';
import '@fontsource/jost/300.css';
import '@fontsource/jost/400.css';
import '@fontsource/jost/500.css';
import '@fontsource/jost/600.css';
import '@fontsource/jost/700.css';
import '@fontsource/jost/800.css';

gsap.registerPlugin(MorphSVGPlugin);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
  <App />
  </StrictMode>,
)
