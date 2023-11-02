import PropType from 'prop-types';
import shipping from "../../assets/ic_shipping.png";
import "./styles.scss";

export default function CardProduct({ ...product }){

    let formater = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
    });

    return(
        <div className="card-products">
            <img src={product.picture} alt="Image product" className="image-product"/>
            <div className="contain-info">
                <div>
                    <span>{formater.format(product.price.currency)}</span>
                    <img src={shipping} alt="Info send"/>
                </div>
                <p>{product.title}</p>
            </div>
            <p>Capital Federal</p>
        </div>
    );
}

CardProduct.propTypes = {
    product: PropType.object
};