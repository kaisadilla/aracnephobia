import './styles.scss'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import IndexPage from './IndexPage';
import WipPage from './pages/WipPage';
import AboutMePage from './pages/about-me/page';

function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route index element={<IndexPage />} />
                    <Route path="/wip" element={<WipPage />} />
                    <Route path="/about-me" element={<AboutMePage />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default App
