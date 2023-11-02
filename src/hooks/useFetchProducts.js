import { useEffect, useState } from 'react';
import { getSearchProducts } from '../helpers/getSearchProducts';

export const useFetchProducts = ( productName, dependency = null ) => {
 
    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState( true );

    useEffect(() => {
        dependency != null && getProducts(); 
    },[dependency]);

    const getProducts = async() => {
        setIsLoading(true);
        try {
            const newProduct = await getSearchProducts( productName );
            setProducts(newProduct);
        } catch {
            console.error("Error in get product");
        } finally {
            setIsLoading(false);
        }
    };
    
    useEffect( () => {
        getProducts();
    }, []);


    return {
        products,
        isLoading
    }

}