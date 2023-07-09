// Dependencies
import PropTypes from "prop-types";

// Principal component
const ContactInputForm = ({ className, input, type, placeholder, autoComplete }) => {
    return (
        <label htmlFor={input} className={className}>
            <input type={type} id={input} name={input} placeholder={placeholder} required autoComplete={autoComplete} />
        </label>
    );
};
// Validation props
ContactInputForm.propTypes = {
    className: PropTypes.string,
    input: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    autoComplete: PropTypes.string.isRequired,
};

// Export component
export default ContactInputForm;
