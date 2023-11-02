import { useEffect, useState } from 'react';
import { getDetailProduct } from '../helpers/getDetailProduct';

export const useFetchDetail = ( id ) => {
 
    const [detail, setDetail] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const getDetail = async() => {
        const newProduct = await getDetailProduct( id );
        setDetail(newProduct);
        setIsLoading(false);
    };
    
    useEffect( () => {
        getDetail();
    }, []);


    return {
        detail,
        isLoading
    };

};