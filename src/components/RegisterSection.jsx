// Dependencies
import PropTypes from "prop-types";

// Components
import RegisterForm from "./molecules/RegisterForm";

// Principal component
const RegisterSection = ({ title }) => {
    return (
        <section className="left">
            <h3 className="title">{title}</h3>
            <div className="register_separator"></div>

            <RegisterForm />
        </section>
    );
};

// Validation props
RegisterSection.propTypes = {
    title: PropTypes.string.isRequired,
};

// Export component
export default RegisterSection;
