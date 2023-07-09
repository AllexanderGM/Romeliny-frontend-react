// Dependencies
import PropTypes from "prop-types";

// Principal component
const HomeProductsItem = ({ img, text }) => {
    return (
        <div className="home_products_item">
            <img src={img} alt="" />
            <p>{text}</p>
        </div>
    );
};

// Validation props
HomeProductsItem.propTypes = {
    img: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
};

// Export component
export default HomeProductsItem;
