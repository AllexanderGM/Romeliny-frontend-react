// Dependencies
import PropTypes from "prop-types";

// Components
import LinkIcon from "../atoms/LinkIcon.jsx";

// Principal component
const FooterLogo = ({ img, listLinks }) => {
    const icons = listLinks.map((item, index) => {
        return <LinkIcon key={index} link={item.link} icon={item.icon} />;
    });

    return (
        <article>
            <figure className="footer_logo">
                <img src={img} alt="Logo blanco para el footer" />
            </figure>

            <div className="footer_social">{icons}</div>
        </article>
    );
};

// Validation props
FooterLogo.propTypes = {
    img: PropTypes.string.isRequired,
    listLinks: PropTypes.array.isRequired,
};

// Export component
export default FooterLogo;
