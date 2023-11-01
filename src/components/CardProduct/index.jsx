import shipping from "../../assets/ic_shipping.png";
import "./styles.scss";

export default function CardProduct(){
    return(
        <div className="card-products">
            <img src="https://http2.mlstatic.com/D_627704-MLA72507457394_102023-O.jpg" alt="Image product" className="image-product"/>
            <div className="contain-info">
                <div>
                    <span>$ 1.980</span>
                    <img src={shipping} alt="Info send"/>
                </div>
                <p>Apple ipod Touch 5g 16gb Negro Igual A Nuevo Completo único!</p>
            </div>
            <p>Capital Federal</p>
        </div>
    );
}