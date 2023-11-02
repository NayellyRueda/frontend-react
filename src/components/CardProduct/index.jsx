import PropType from 'prop-types';
import { useNavigate } from 'react-router-dom';
import shipping from "../../assets/ic_shipping.png";
import "./styles.scss";
import { useFormatPrice } from '../../hooks';

export default function CardProduct({ ...product }){
    const navigate = useNavigate();

    let formater = useFormatPrice();

    return(
        <div className="card-products" onClick={() => navigate(`/items/${product.id}`)}>
            <img src={product.picture} alt="Image product" className="image-product"/>
            <div className="contain-info">
                <div>
                    <span>{formater.format(product.price.amount)}</span>
                    <img src={shipping} alt="Info send"/>
                </div>
                <p>{product.title}</p>
            </div>
            <p>{product.state_name}</p>
        </div>
    );
}

CardProduct.propTypes = {
    product: PropType.object
};