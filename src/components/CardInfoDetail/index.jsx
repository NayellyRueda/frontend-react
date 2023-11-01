import Button from "../Button";
import "./styles.scss";

export default function CardInfoDetail(){
    return (
        <div>
            <p className="product-info">Nuevo - 243 vendidos</p>
            <p className="product-title">Deco Reverse Sombrero Oxford</p>
            <p className="product-price">$ 1.980</p>
            <Button text="Comprar"/>
        </div>
    );
}