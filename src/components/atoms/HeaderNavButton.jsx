// Dependencies
import { useContext } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

// Context
import GlobalContext from "../../context/GlobalContext";

// Component principal
const HeaderNavButton = ({ loginHandleShow, loginButton, classButton }) => {
    const { context } = useContext(GlobalContext);
    const activeUser = context.user.active;
    const userRoute = context.routes.user;

    if (activeUser) {
        return (
            <li>
                <Link className={classButton} to={userRoute}>
                    {loginButton}
                </Link>
            </li>
        );
    } else {
        return (
            <li>
                <button className={classButton} onClick={loginHandleShow}>
                    {loginButton}
                </button>
            </li>
        );
    }
};

// Validation props
HeaderNavButton.propTypes = {
    loginHandleShow: PropTypes.func.isRequired,
};

// Export component
export default HeaderNavButton;
