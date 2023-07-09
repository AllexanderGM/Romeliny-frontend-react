// Dependencies
import PropTypes from "prop-types";

// Principal component
const InputForm = ({ className, text, input, type, placeholder, autoComplete }) => {
    const textContent =
        text === "dataPolicy" ? (
            <>
                Para continuar tienes que aceptar las <a href="/">Condiciones de uso</a>, nuestro
                <a href="/">Aviso de privacidad</a> y nuestras
                <a href="/">Condiciones de Cookies y publicidad en internet</a>
            </>
        ) : (
            text
        );

    return (
        <label htmlFor={input} className={className}>
            <span>{textContent}</span>
            <input type={type} id={input} name={input} placeholder={placeholder} required autoComplete={autoComplete} />
        </label>
    );
};

// Validation props
InputForm.propTypes = {
    className: PropTypes.string,
    text: PropTypes.string.isRequired,
    input: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    autoComplete: PropTypes.string.isRequired,
};

// Export component
export default InputForm;
