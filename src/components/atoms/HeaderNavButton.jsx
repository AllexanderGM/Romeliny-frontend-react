// Dependencies
import PropTypes from "prop-types";

// Component principal
const HeaderNavButton = ({ loginHandleShow, loginButton, classButton }) => {
    return (
        <li>
            <button className={classButton} onClick={loginHandleShow}>
                {loginButton}
            </button>
        </li>
    );
};

// Validation props
HeaderNavButton.propTypes = {
    loginHandleShow: PropTypes.func.isRequired,
};

// Export component
export default HeaderNavButton;
