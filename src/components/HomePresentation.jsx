// Dependencies
import { useContext } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

// Context
import GlobalContext from "../context/GlobalContext";

// Principal component
const HomePresentation = ({ caption, text1, text2, btn, img }) => {
    // Data aptenida del contexto global
    const { context } = useContext(GlobalContext);
    const routes = context.routes;

    return (
        <section className="presentation">
            <article className="presentation_left">
                <h1 className="presentation_title">
                    R<span>o</span>meliny
                </h1>

                <h2 className="presentation_caption">{caption}</h2>

                <div className="presentation_separator"></div>

                <p className="presentation_text">
                    {text1}
                    <br />
                    {text2}
                </p>

                <Link className="presentation_btn" to={routes.contact}>
                    {btn}
                </Link>
            </article>

            <figure className="presentation_image">
                <img src={img} alt="Banner de imagen principal" />
            </figure>
        </section>
    );
};

// Validation component
HomePresentation.propTypes = {
    caption: PropTypes.string.isRequired,
    text1: PropTypes.string.isRequired,
    text2: PropTypes.string.isRequired,
    btn: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
};

// Export component
export default HomePresentation;
