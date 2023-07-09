// Dependencies
import PropTypes from "prop-types";

// Principal component
const LinkIcon = ({ link, icon }) => {
    return (
        <a href={link} target="_blank">
            <ion-icon name={icon}></ion-icon>
        </a>
    );
};

// Validation props
LinkIcon.propTypes = {
    link: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
};

// Export component
export default LinkIcon;
