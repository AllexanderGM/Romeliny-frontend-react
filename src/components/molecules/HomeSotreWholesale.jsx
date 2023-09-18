// Dependencies
import { useContext } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

// Context
import GlobalContext from "../../context/GlobalContext.jsx";

// Principal components
const HomeSotreWholesale = ({ infoWholesale }) => {
    const { context } = useContext(GlobalContext);
    const routes = context.routes;

    return (
        <div className="store_wholesale">
            <h2>
                <ion-icon name={infoWholesale.icon}></ion-icon> {infoWholesale.title}
            </h2>

            <p>{infoWholesale.text}</p>

            <Link className="presentation_btn" to={routes.contact}>
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
