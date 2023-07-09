// Dependencies
import PropTypes from "prop-types";

// Components
import HeaderNavItem from "../atoms/HeaderNavItem.jsx";

// Principal component
const AsideSection = ({ title, listItems }) => {
    const items = listItems.map((item, index) => {
        return <HeaderNavItem key={index} link={item.route} text={item.text} icon={item.icon} />;
    });

    return (
        <section>
            <h3>{title}</h3>
            <nav>
                <ul className="nav_list">{items}</ul>
            </nav>
        </section>
    );
};

// Validation props
AsideSection.propTypes = {
    title: PropTypes.string.isRequired,
    listItems: PropTypes.array.isRequired,
};

// Export component
export default AsideSection;
