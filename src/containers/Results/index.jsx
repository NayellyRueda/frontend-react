import { Fragment } from "react";
import { BackgroundContent, BreadCrumbs, CardProduct, Spinner, NoResults } from "../../components";
import { useSearchParams } from "react-router-dom";
import { useFetchProducts } from "../../hooks/useFetchProducts";

export default function Results() {
    let [searchParams] = useSearchParams();
    const { products, isLoading } = useFetchProducts( searchParams, searchParams );
    
    if(isLoading){
        return (
            <Spinner/>
        )
    };

    return (
        <div>
            <BreadCrumbs category={products.categories}/>
            <BackgroundContent>
                {products?.items?.map((product, index) => (
                    <Fragment key={index}>
                        <CardProduct {...product} />
                    </Fragment>
                ))}
                {products.items.length === 0 && (
                    <NoResults product={searchParams}/>
                )}
            </BackgroundContent>
        </div>
    )
};