import './styles.scss'
import '@mantine/core/styles.layer.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import IndexPage from './IndexPage';
import WipPage from './pages/WipPage';
import AboutMePage from './pages/about-me/page';
import { MantineProvider } from '@mantine/core';

function App() {
    return (
        <>
        <MantineProvider>

        <BrowserRouter>
            <Routes>
                <Route index element={<IndexPage />} />
                <Route path="/wip" element={<WipPage />} />
                <Route path="/about-me" element={<AboutMePage />} />
            </Routes>
        </BrowserRouter>

        </MantineProvider>
        </>
    )
}

export default App
