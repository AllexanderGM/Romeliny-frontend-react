// Dependencies
import PropTypes from "prop-types";

// Component principal
const HeaderNavButton = ({ loginHandleShow }) => {
    return (
        <button className="header_nav_item" onClick={loginHandleShow}>
            <ion-icon class="open_login" name="person-circle-outline"></ion-icon>
        </button>
    );
};

// Validation props
HeaderNavButton.propTypes = {
    loginHandleShow: PropTypes.func.isRequired,
};

// Export component
export default HeaderNavButton;
