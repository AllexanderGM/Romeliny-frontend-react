// Dependencies
import { useContext } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

// Components
import HomeSotreWholesale from "./molecules/HomeSotreWholesale.jsx";

// Context
import GlobalContext from "../context/GlobalContext.jsx";

// Principal components
const HomeStore = ({ img, icon, title, text, btn, infoWholesale }) => {
    const { context } = useContext(GlobalContext);
    const routes = context.routes;

    return (
        <section className="store">
            <article className="store_initial">
                <figure className="store_image">
                    <img src={img} alt="img" />
                </figure>

                <article className="store_content">
                    <ion-icon name={icon}></ion-icon>

                    <h2>{title}</h2>

                    <p>{text}</p>

                    <Link className="presentation_btn" to={routes.store}>
                        {btn}
                    </Link>

                    <HomeSotreWholesale infoWholesale={infoWholesale} />
                </article>
            </article>
        </section>
    );
};

// Validation component
HomeStore.propTypes = {
    img: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    btn: PropTypes.string.isRequired,
    infoWholesale: PropTypes.object.isRequired,
};

// Export component
export default HomeStore;
