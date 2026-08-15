import '@mantine/core/styles.layer.css';
import 'material-symbols';
import './styles/main.scss';

import { MantineProvider } from '@mantine/core';
import Layout from 'components/Layout';
import { ServerProvider } from 'context/useServer';
import { SongProvider } from 'context/useSong';
import AboutPage from 'pages/about/page';
import HomePage from 'pages/home/page';
import MusicPage from 'pages/music/page';
import MusicOsPage from 'pages/musicOs/page';
import { MusicOsProvider } from 'pages/musicOs/useMusicOsCtx';
import PortfolioPage from 'pages/portfolio/page';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import IndexPage from './IndexPage';
import WipPage from './pages/WipPage';

type AnimState = 'cover' | 'logo' | 'website';

function App() {
  return (
    <BrowserRouter>
      <MantineProvider>
        <_RouterContent />
      </MantineProvider>
    </BrowserRouter>
  );
}

function _RouterContent () {
  const loc = useLocation();

  const curtainSide: 'left' | 'right' | 'none' = (() => {
    if (loc.pathname === "/portfolio") {
      return 'right';
    }
    if (loc.pathname === "/home") {
      return 'left';
    }

    return 'none';
  })();

  return (<>
    <Routes>
      <Route index element={<IndexPage />} />
      <Route path="/wip" element={<WipPage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/music" element={
        <ServerProvider>
          <SongProvider>
            <MusicPage />
          </SongProvider>
        </ServerProvider>
      } />
      <Route path="/music_os" element={
        <MusicOsProvider>
          <MusicOsPage />
        </MusicOsProvider>
      } />
      <Route path="*" element={
        <Layout logo='web' curtainSide={curtainSide} navigator>
          <Routes>
            <Route path="/home" element={<HomePage />} />
            <Route path="/portfolio" element={<PortfolioPage />} />
          </Routes>
        </Layout>
      } />
    </Routes>
  </>);
}


export default App
