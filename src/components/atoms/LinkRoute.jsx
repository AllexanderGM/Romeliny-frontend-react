// dependencies
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

// Principal component
const LinkRoute = ({ link, text }) => {
    return (
        <li>
            <Link to={link}>{text}</Link>
        </li>
    );
};

// Validation props
LinkRoute.propTypes = {
    link: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
};

// Export component
export default LinkRoute;
