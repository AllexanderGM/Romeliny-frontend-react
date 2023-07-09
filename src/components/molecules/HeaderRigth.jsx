// Dependencies
import PropTypes from "prop-types";

// Principal component
const HeaderRigth = ({ children }) => {
    return (
        <figure className="header_rigth">
            <ul className="header_list">{children}</ul>
        </figure>
    );
};

// Validation props
HeaderRigth.propTypes = {
    children: PropTypes.node.isRequired,
};

// Export component
export default HeaderRigth;
