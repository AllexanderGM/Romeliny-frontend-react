// Dependencies
import PropTypes from "prop-types";

// Principal component
const AsideSectionSocial = ({ title, listItems }) => {
    const items = listItems.map((item, index) => {
        return (
            <a key={index} href={item.route} target="_blank">
                <ion-icon name={item.icon}></ion-icon>
            </a>
        );
    });

    return (
        <section>
            <h3>{title}</h3>
            <nav className="social_nav">
                <ul className="nav-header_nav_item">{items}</ul>
            </nav>
        </section>
    );
};

// Validation props
AsideSectionSocial.propTypes = {
    title: PropTypes.string.isRequired,
    listItems: PropTypes.array.isRequired,
};

// Export component
export default AsideSectionSocial;
