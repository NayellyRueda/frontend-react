import CardProduct from "../../components/CardProduct";
import Header from "../../components/Header";
import "./styles.scss";

export default function Home(){

    return(
        <>
            <Header/>
            <div className="container">
                <CardProduct/>
                <CardProduct/>
            </div>
        </>
    )
};