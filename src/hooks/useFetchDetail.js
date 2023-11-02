import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getDetailProduct } from '../helpers/getDetailProduct';

export const useFetchDetail = ( id ) => {
 
    const [detail, setDetail] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const navigate = useNavigate();

    const getDetail = async() => {
        try {
            const newProduct = await getDetailProduct( id );
            setDetail(newProduct);

        }catch (err) {
            navigate("/404")
        } finally {
            setIsLoading(false);
        }
    };
    
    useEffect( () => {
        getDetail();
    }, []);


    return {
        detail,
        isLoading
    };

};