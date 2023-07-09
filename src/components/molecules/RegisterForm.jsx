// Components
import InputForm from "../atoms/InputForm.jsx";

// Principal component
const RegisterForm = () => {
    return (
        <form className="login_form register_form">
            <InputForm text="Nombre" input="registerName" type="text" placeholder="Tu nombre" autoComplete="on" />

            <InputForm text="Correo" input="registerEmail" type="email" placeholder="ejemplo@romeliny.com" autoComplete="on" />

            <InputForm text="Contraseña" input="registerPassword" type="password" placeholder="* * * * * *" autoComplete="off" />

            <InputForm
                text="Confirmar contraseña"
                input="registerPasswordConfirm"
                type="password"
                placeholder="* * * * * *"
                autoComplete="off"
            />

            <InputForm
                className="data_policy"
                text="dataPolicy"
                input="registerDataPolicy"
                type="checkbox"
                placeholder=""
                autoComplete="off"
            />

            <button type="submit">Registrarse</button>
        </form>
    );
};

// Export component
export default RegisterForm;
