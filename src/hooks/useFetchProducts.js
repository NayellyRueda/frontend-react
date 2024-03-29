import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getSearchProducts } from '../helpers/getSearchProducts';

export const useFetchProducts = ( productName ) => {
    const navigate = useNavigate();
    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState( true );


    const getProducts = async() => {
        setIsLoading(true);
        try {
            const newProduct = await getSearchProducts( productName );
            setProducts(newProduct);
        } catch {
            navigate('/404');
        } finally {
            setIsLoading(false);
        }
    };
    
    useEffect( () => {
        getProducts();
    }, [productName]);


    return {
        products,
        isLoading
    }

}