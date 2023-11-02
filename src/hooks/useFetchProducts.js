import { useEffect, useState } from 'react';
import { getSearchProducts } from '../helpers/getSearchProducts';

export const useFetchProducts = ( productName ) => {
 
    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState( true );

    const getProducts = async() => {
        const newProduct = await getSearchProducts( productName );
        setProducts(newProduct);
        setIsLoading(false);
    }
    
    useEffect( () => {
        getProducts();
    }, []);


    return {
        products,
        isLoading
    }

}