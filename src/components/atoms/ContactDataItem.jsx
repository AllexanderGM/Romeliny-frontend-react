// Dependencies
import PropTypes from "prop-types";

// Principal component
const ContactDataItem = ({ icon, h2, text }) => {
    return (
        <li className="data_item">
            <ion-icon name={icon}></ion-icon>
            <article>
                <h2>{h2}</h2>
                <p>{text}</p>
            </article>
        </li>
    );
};
// Validation component
ContactDataItem.propTypes = {
    icon: PropTypes.string.isRequired,
    h2: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
};

// Export component
export default ContactDataItem;
