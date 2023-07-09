// dependencies
import PropTypes from "prop-types";

// Principal component
const LinkText = ({ link, text }) => {
    return (
        <li>
            <a href={link} target="_blank">
                {text}
            </a>
        </li>
    );
};

// Validation props
LinkText.propTypes = {
    link: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
};

// Export component
export default LinkText;
