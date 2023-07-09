// Dependencies
import PropTypes from "prop-types";

// Principal component
const HeaderLeft = ({ children }) => {
    return <figure className="header_left">{children}</figure>;
};

// Validation props
HeaderLeft.propTypes = {
    children: PropTypes.node.isRequired,
};

// Export component
export default HeaderLeft;
