// Dependencies
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

// Components
import HomeSotreWholesale from "./molecules/HomeSotreWholesale.jsx";

// Principal components
const HomeStore = ({ img, icon, title, text, btn, infoWholesale }) => {
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

                    <Link className="presentation_btn" to="#about">
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
