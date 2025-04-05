import './styles.scss'
import '@mantine/core/styles.layer.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import IndexPage from './IndexPage';
import WipPage from './pages/WipPage';
import AboutMePage from './pages/about/page';
import { MantineProvider } from '@mantine/core';
import styles from "./App.module.scss";
import WebHeader from 'components/WebHeader';
import Navigator from 'components/Navigator';
import PortfolioPage from 'pages/portfolio/page';

function App() {
    return (
        <>
            <MantineProvider>

            <BrowserRouter>
                <Routes>
                    <Route index element={<IndexPage />} />
                    <Route path="/wip" element={<WipPage />} />
                </Routes>
            </BrowserRouter>

            <div className={styles.websiteFrame}>
                <div className={styles.headerContainer}>
                    <WebHeader />
                </div>
                <div className={styles.pageContainer}>
                    <BrowserRouter>
                        <Routes>
                            <Route path="/about" element={<AboutMePage />} />
                            <Route path="/portfolio" element={<PortfolioPage />} />
                        </Routes>
                    </BrowserRouter>
                </div>
                <div className={styles.navigator}>
                    <Navigator />
                </div>
            </div>

            </MantineProvider>
        </>
    )
}

export default App
