import PropType from 'prop-types';
import Button from "../Button";
import { useFormatPrice } from "../../hooks";
import "./styles.scss";

export default function CardInfoDetail({ ...detail }){
    
    let formater = useFormatPrice();

    return (
        <div>
            <p className="product-info">{detail?.condition} - {detail?.sold_quantity} vendidos</p>
            <p className="product-title">{detail.title}</p>
            <p className="product-price">{formater.format(detail.price.amount)}</p>
            <Button text="Comprar"/>
        </div>
    );
}

CardInfoDetail.propTypes = {
    detail: PropType.object
};