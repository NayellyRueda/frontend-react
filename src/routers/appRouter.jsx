import { Routes, Route, BrowserRouter } from 'react-router-dom';

import Home from '../containers/home';

export const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>                
                <Route path="/" element={<Home />} />
            </Routes>
        </BrowserRouter>
    )
};