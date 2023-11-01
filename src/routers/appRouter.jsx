import { Routes, Route, BrowserRouter } from 'react-router-dom';

import Home from '../containers/home';
import Results from '../containers/Results';
import DetailProduct from '../containers/DetailProduct';

export const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>                
                <Route path="/" element={<Home />} />
                <Route path="/items" element={<Results />} />
                <Route path="/items/:id" element={<DetailProduct />} />
            </Routes>
        </BrowserRouter>
    )
};