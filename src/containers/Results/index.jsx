import { Fragment } from "react";
import { BackgroundContent, BreadCrumbs, CardProduct } from "../../components";
import { useSearchParams } from "react-router-dom";
import { useFetchProducts } from "../../hooks/useFetchProducts";

export default function Results() {
    let [searchParams] = useSearchParams();
    const { products, isLoading } = useFetchProducts( searchParams, searchParams );
    
    isLoading && ( <h2>Cargando...</h2> )

    return (
        <div>
            <div className="results-breadCrumbs">
                {products?.categories?.map((category, index) => (
                    <BreadCrumbs category={category} key={index}/>
                ))}
            </div>
            <BackgroundContent>
                {products?.items?.map((product, index) => (
                    <Fragment key={index}>
                        <CardProduct {...product} />
                    </Fragment>
                ))}
            </BackgroundContent>
        </div>
    )
}