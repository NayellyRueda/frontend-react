import { Fragment } from "react";
import { BackgroundContent, BreadCrumbs, CardProduct } from "../../components";
import { useFetchProducts } from "../../hooks/useFetchProducts";

export default function Results() {
    const word = "iphone"
    const { products, isLoading } = useFetchProducts( word );
    
    console.log(products, isLoading);

    const data = {
        "author": {
            "name": "String",
            "lastname": "String"
        },
        "categories": [
            "Libros, Revistas y Comics",
            "Libros Físicos"
        ],
        "items": [
            {
                "id": "MCO1338028459",
                "title": "Yo, Robot - Isaac Asimov",
                "price": {
                    "currency": 114720,
                    "amount": "COP",
                    "decimals": 0
                },
                "picture": "http://http2.mlstatic.com/D_755037-MCO43541963752_092020-I.jpg",
                "condition": "new",
                "free_shipping": true
            },
            {
                "id": "MCO1759877284",
                "title": "Yo, Robot - Asimov, Isaac",
                "price": {
                    "currency": 87044,
                    "amount": "COP",
                    "decimals": 0
                },
                "picture": "http://http2.mlstatic.com/D_792616-MLA49696605355_042022-I.jpg",
                "condition": "new",
                "free_shipping": true
            },
            {
                "id": "MCO1246966355",
                "title": "Libro: Yo, Robot (bolsillo) (spanish Edition)",
                "price": {
                    "currency": 154588,
                    "amount": "COP",
                    "decimals": 0
                },
                "picture": "http://http2.mlstatic.com/D_613992-CBT53915979232_022023-I.jpg",
                "condition": "new",
                "free_shipping": true
            },
            {
                "id": "MCO822918078",
                "title": "Libro Yo Robot",
                "price": {
                    "currency": 114720,
                    "amount": "COP",
                    "decimals": 0
                },
                "picture": "http://http2.mlstatic.com/D_684689-MCO70035164813_062023-I.jpg",
                "condition": "new",
                "free_shipping": true
            }
    ]};

    return (
        <div>
            <div className="results-breadCrumbs">
                {data.categories.map((category, index) => (
                    <BreadCrumbs category={category} key={index}/>
                ))}
            </div>
            <BackgroundContent>
                {data.items.map((product, index) => (
                    <Fragment key={index}>
                        <CardProduct {...product} />
                    </Fragment>
                ))}
            </BackgroundContent>
        </div>
    )
}