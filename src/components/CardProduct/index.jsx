import PropType from 'prop-types';
import { useNavigate, Link } from 'react-router-dom';
import shipping from "../../assets/ic_shipping.png";
import imageNotFound from "../../assets/no_image.jpg";
import "./styles.scss";
import { useFormatPrice } from '../../hooks';

export default function CardProduct({ ...product }){
    const navigate = useNavigate();

    let formater = useFormatPrice();

    return(
        <div className="card-products">
            <div className='card-image'>
                <Link to={`/items/${product?.id}`}  className='links'>
                    <img src={product?.picture ?? imageNotFound} alt="Image product" className="image-product"/>
                </Link>
            </div>
            <div className="contain-info">
                <div>
                    <span>{formater.format(product.price?.amount) ?? '$ 0'}</span>
                    {product?.free_shipping && (<img src={shipping} alt="Info send"/>)}
                </div>
                <Link to={`/items/${product?.id}`} className='links'>
                    <p>{product?.title}</p>
                </Link>
            </div>
            <div className='card-state-name'>
                <p className='text-state-name'>{product?.state_name}</p>
            </div>
        </div>
    );
}

CardProduct.propTypes = {
    product: PropType.object
};