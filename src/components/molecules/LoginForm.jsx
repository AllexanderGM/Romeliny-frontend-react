// Components
import InputForm from "../atoms/InputForm.jsx";

// Principal component
const LoginForm = () => {
    return (
        <form className="login_form" action="">
            <InputForm text="Correo" input="loginEmail" type="mail" placeholder=" ejemplo@romeliny.com" autoComplete="on" />
            <InputForm text="Contraseña" input="loginPassword" type="password" placeholder=" * * * * * * " autoComplete="off" />
            <button type="submit">Ingresar</button>
        </form>
    );
};

// Export component
export default LoginForm;
