import PropType from 'prop-types';
import "./styles.scss";
export default function BreadCrumbs({ category }) {

    const categories = category?.join(" > ") ?? "";

    return (
        <div className="breadcrumbs-container">
            <p className='breadcrumb-text'>{categories} </p>
        </div>
    )
};

BreadCrumbs.propTypes = {
    category: PropType.array
};