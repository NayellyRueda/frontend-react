import { 
    Routes, 
    Route, 
    BrowserRouter,
} from 'react-router-dom';
import {  
    Home,
    Results, 
    DetailProduct,
    PageNotFound,
} from '../containers';

export const AppRouter = () => {

    return (
        <BrowserRouter>
            <Routes>        
                <Route path="/" element={<Home />} >
                    <Route path="/items" element={<Results />} />
                    <Route path="/items/:id" element={<DetailProduct />} />
                </Route>
                <Route path="*" element={<PageNotFound />} />
            </Routes>
        </BrowserRouter>
    )
};