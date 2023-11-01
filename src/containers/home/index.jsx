import CardProduct from "../../components/CardProduct";
import { Header, BackgroundContent } from "../../components";
import "./styles.scss";

export default function Home(){

    return(
        <>
            <Header/>
            <BackgroundContent>
                <CardProduct/>
                <CardProduct/>
            </BackgroundContent>
        </>
    )
};