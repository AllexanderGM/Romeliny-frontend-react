// Dependencies
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

// Principal component
const HeaderNavItem = ({ link, text, icon }) => {
    return (
        <li className="header_nav_item">
            <Link className="header_nav_item_link" to={link}>
                <ion-icon name={icon}></ion-icon>
                <h4>{text}</h4>
            </Link>
        </li>
    );
};

// Validation component
HeaderNavItem.propTypes = {
    link: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    icon: PropTypes.string,
};

// Export component
export default HeaderNavItem;
