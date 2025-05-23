import './styles.scss'
import '@mantine/core/styles.layer.css';
import 'material-symbols';

import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import IndexPage from './IndexPage';
import WipPage from './pages/WipPage';
import { MantineProvider } from '@mantine/core';
import styles from "./App.module.scss";
import WebHeader from 'components/WebHeader';
import Navigator from 'components/Navigator';
import PortfolioPage from 'pages/portfolio/page';
import { useEffect, useState } from 'react';
import { $cl } from 'utils';
import SiteImage from 'components/SiteImage';
import { useMediaQuery } from '@mantine/hooks';
import PhoneHeader from 'components/PhoneHeader';
import AboutPage from 'pages/about/page';
import { IMG } from 'assets/img/img';

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

    const [animState, setAnimState] = useState<AnimState>(
        loc.pathname === "/about" ? 'website' : 'cover'
    );

    const isPhone = useMediaQuery('(min-width: 50rem)') === false;

    return (<>
        <Routes>
            <Route index element={<IndexPage />} />
            <Route path="/wip" element={<WipPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="*" element={
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
                        />
                    </div>}

                    {animState === 'website' && <>
                        <div className={styles.headerContainer}>
                            {isPhone === false && <WebHeader />}
                            {isPhone && <PhoneHeader />}
                        </div>
                        <div className={styles.pageContainer}>
                            <Routes>
                                <Route path="/portfolio" element={<PortfolioPage />} />
                            </Routes>
                        </div>
                    </>}
                </div>
            } />
        </Routes>
        
        {isPhone === false && animState === 'website' && <div className={styles.navigator}>
            <Navigator />
        </div>}
    </>);

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
