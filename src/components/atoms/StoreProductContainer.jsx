// Dependencies
import PropTypes from "prop-types";

// Principal component
const StoreProductContainer = ({ category }) => {
    return (
        <div className="product_container_category">
            <div className="product_category">
                <p>{category}</p>
            </div>

            <button className="product_cart">
                <ion-icon name="cart-outline"></ion-icon>
            </button>
        </div>
    );
};

// Validation props
StoreProductContainer.propTypes = {
    category: PropTypes.string.isRequired,
};

// Export component
export default StoreProductContainer;
