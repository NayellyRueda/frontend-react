import PropType from 'prop-types';
import "./styles.scss";
export default function BreadCrumbs({category}) {

    console.log(category);
    return (
        <div className="breadcrumbs-container">
            <p>{category}</p>
            <p>{`>`}</p>
        </div>
    )
};

BreadCrumbs.propTypes = {
    category: PropType.string
};