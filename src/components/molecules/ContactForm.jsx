// Components
import ContactinputForm from "../atoms/ContactInputForm";

// Principal component
const ContactForm = () => {
    return (
        <form className="login_form contact_form">
            <ContactinputForm input="contactName" type="text" placeholder=" Nombre" autoComplete="on" />
            <ContactinputForm input="contactEmail" type="email" placeholder=" ejemplo@romeliny.com" autoComplete="on" />
            <ContactinputForm input="contactSubject" type="text" placeholder=" Asunto" autoComplete="off" />

            <label htmlFor="contactMessage">
                <textarea
                    className="contact_form_textArea"
                    id="contactMessage"
                    name="contactMessage"
                    rows="6"
                    placeholder="Tu mensaje ..."
                ></textarea>
            </label>

            <button type="submit">Enviar</button>
        </form>
    );
};

// Export component
export default ContactForm;
