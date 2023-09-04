// Dependencies
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

// Components
import InputForm from "../atoms/InputForm.jsx";

// Context
import GlobalContext from "../../context/GlobalContext.jsx";

// Principal component
const RegisterForm = () => {
    const navigate = useNavigate();
    const { context, setContext } = useContext(GlobalContext);

    const url_api = context.url_api;

    const register = (event) => {
        event.preventDefault();

        const registerData = {
            email: event.target.registerEmail.value,
            fullname: `${event.target.registerName.value} ${event.target.registerLastName.value}`,
            phone: event.target.registerPhone.value,
            age: event.target.registerAge.value,
            avatar: "https://static.vecteezy.com/system/resources/previews/008/442/086/non_2x/illustration-of-human-icon-user-symbol-icon-modern-design-on-blank-background-free-vector.jpg",
            password:
                event.target.registerPassword.value === event.target.registerPasswordConfirm.value
                    ? event.target.registerPassword.value
                    : null,
            admin: false,
        };

        fetch(`${url_api}/register`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(registerData),
        })
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Error de red o servidor");
                }
                return response.json();
            })
            .then((data) => {
                console.log(data);
                navigate("/");
            })
            .catch((error) => {
                console.error("Error al iniciar sesión:", error);
            });
    };

    return (
        <form className="login_form register_form" action="POST" onSubmit={register}>
            <InputForm text="Correo" input="registerEmail" type="email" placeholder="ejemplo@romeliny.com" autoComplete="on" />
            <InputForm text="Nombre" input="registerName" type="text" placeholder="" autoComplete="on" />
            <InputForm text="Apellido" input="registerLastName" type="text" placeholder="" autoComplete="on" />
            <InputForm text="Telefono" input="registerPhone" type="number" placeholder="" autoComplete="on" />
            <InputForm text="Edad" input="registerAge" type="number" placeholder="" autoComplete="on" />
            <InputForm text="Contraseña" input="registerPassword" type="password" placeholder="" autoComplete="off" />
            <InputForm text="Confirmar contraseña" input="registerPasswordConfirm" type="password" placeholder="" autoComplete="off" />
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
