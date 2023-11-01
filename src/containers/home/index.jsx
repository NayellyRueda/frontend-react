import CardProduct from "../../components/CardProduct";
import { Header, BackgroundContent } from "../../components";
import "./styles.scss";
import BreadCrumbs from "../../components/BreadCrumbs";

export default function Home(){

    return(
        <>
            <Header/>
            <BreadCrumbs/>
            <BackgroundContent>
                <CardProduct/>
                <CardProduct/>
            </BackgroundContent>
        </>
    )
};