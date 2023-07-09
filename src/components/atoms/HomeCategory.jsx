// Dependencies
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

// Principal component
const HomeCategory = ({ link, id, img, name }) => {
    return (
        <Link to={link} className="category" id={id} style={{ backgroundImage: `url(${img})` }}>
            <div className="category_gradient">
                <h3 className="category_text">{name}</h3>
            </div>
        </Link>
    );
};

// Validation props
HomeCategory.propTypes = {
    link: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
};

// Export component
export default HomeCategory;
