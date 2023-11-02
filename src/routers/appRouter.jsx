import { 
    Routes, 
    Route, 
    BrowserRouter 
} from 'react-router-dom';
import { Header } from '../components';
import {  
    Home,
    Results, 
    DetailProduct,
    PageNotFound,
} from '../containers';

export const AppRouter = () => {
    return (
        <BrowserRouter>
            <Header/>
            <Routes>        
                <Route path="/" element={<Home />} />
                <Route path="/items" element={<Results />} />
                <Route path="/items/:id" element={<DetailProduct />} />
                <Route path="*" element={<PageNotFound />} />
            </Routes>
        </BrowserRouter>
    )
};