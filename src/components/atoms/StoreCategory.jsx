// Dependencies
import PropTypes from "prop-types";

// Principal component
const StoreCategory = ({ text }) => {
    return (
        <li className="category">
            <button className="category_btn">{text}</button>
        </li>
    );
};

// Validation props
StoreCategory.propTypes = {
    text: PropTypes.string.isRequired,
};

// Export component
export default StoreCategory;
