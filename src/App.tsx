import './styles.scss'
import '@mantine/core/styles.layer.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import IndexPage from './IndexPage';
import WipPage from './pages/WipPage';
import AboutPage from './pages/about/page';
import { MantineProvider } from '@mantine/core';
import styles from "./App.module.scss";
import WebHeader from 'components/WebHeader';
import Navigator from 'components/Navigator';
import PortfolioPage from 'pages/portfolio/page';
import { useEffect, useState } from 'react';
import { $cl } from 'utils';
import SiteImage from 'components/SiteImage';
import { IMG } from 'img/img';

type AnimState = 'cover' | 'logo' | 'website';

function App() {
    const [animState, setAnimState] = useState<AnimState>('cover');

    return (
        <BrowserRouter>
            <MantineProvider>

                <Routes>
                    <Route index element={<IndexPage />} />
                    <Route path="/wip" element={<WipPage />} />
                </Routes>

            <div className={styles.websiteFrame}>
                {animState === 'cover' && <div
                    className={styles.curtain}
                    onAnimationEnd={handleCoverAnimationEnd}
                >
                    <img src="/img/curtain-default.svg" />
                </div>}

                {animState === 'logo' && <div
                    className={$cl(styles.introLogoContainer)}
                    onAnimationEnd={handleLogoAnimationEnd}
                >
                    <SiteImage
                        className={styles.introLogo}
                        image={IMG.aracnephobia_logo}
                        noAlt
                    />
                </div>}

                {animState === 'website' && <>
                    <div className={styles.headerContainer}>
                        <WebHeader />
                    </div>
                    <div className={styles.pageContainer}>
                        <Routes>
                            <Route path="/about" element={<AboutPage />} />
                            <Route path="/portfolio" element={<PortfolioPage />} />
                        </Routes>
                    </div>
                    <div className={styles.navigator}>
                        <Navigator />
                    </div>
                </>}
            </div>

            </MantineProvider>
        </BrowserRouter>
    );

    function handleCoverAnimationEnd () {
        setAnimState('logo');
    }

    function handleLogoAnimationEnd (evt: React.AnimationEvent<HTMLDivElement>) {
        if (evt.animationName === styles.bounceOut) {
            setAnimState('website');
        }
    }
}

export default App
