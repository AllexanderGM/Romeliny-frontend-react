// Dependencies
import PropTypes from "prop-types";

// Components
import ContactForm from "./molecules/ContactForm";

// Principal component
const ContactMessage = ({ title, text }) => {
    return (
        <section className="contact_menssage">
            <h1>{title}</h1>
            <p>{text}</p>

            <ContactForm />
        </section>
    );
};

// Validation component
ContactMessage.propTypes = {
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
};

// Export component
export default ContactMessage;
