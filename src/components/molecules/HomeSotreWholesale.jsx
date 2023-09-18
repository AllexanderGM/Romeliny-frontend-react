// Dependencies
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

// Principal components
const HomeSotreWholesale = ({ infoWholesale }) => {
    return (
        <div className="store_wholesale">
            <h2>
                <ion-icon name={infoWholesale.icon}></ion-icon> {infoWholesale.title}
            </h2>

            <p>{infoWholesale.text}</p>

            <Link className="presentation_btn" to="#about">
                {infoWholesale.btn}
            </Link>
        </div>
    );
};

// Validation component
HomeSotreWholesale.propTypes = {
    infoWholesale: PropTypes.object.isRequired,
};

// Export component
export default HomeSotreWholesale;
