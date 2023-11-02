import { Header } from "../../components";
import "./styles.scss";
import { Outlet } from "react-router-dom";

export default function Home(){

    return(
        <>
            <Header/>
            <Outlet/>
        </>
    )
};