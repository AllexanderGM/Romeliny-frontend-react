// Dependencies
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

// Components
import InputForm from "../atoms/InputForm.jsx";

// Context
import GlobalContext from "../../context/GlobalContext.jsx";

// Principal component
const LoginForm = () => {
    const navigate = useNavigate();
    const { context, setContext } = useContext(GlobalContext);
    const url_api = context.url_api;

    const login = (event) => {
        event.preventDefault();

        const loginData = {
            email: event.target.loginEmail.value,
            password: event.target.loginPassword.value,
        };

        fetch(`${url_api}/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(loginData),
        })
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Error de red o servidor");
                }
                return response.json();
            })
            .then((data) => {
                const user = data.user;
                const isActive = data.session;

                setContext({
                    ...context,
                    user: { name: user.fullname, email: user.email, age: user.age, phone: user.phone, active: isActive, admin: user.admin },
                });
                navigate("/user");
            })
            .catch((error) => {
                console.error("Error al iniciar sesión:", error);
            });
    };

    return (
        <form className="login_form" action="POST" onSubmit={login}>
            <InputForm text="Correo" input="loginEmail" type="mail" placeholder=" ejemplo@romeliny.com" autoComplete="on" />
            <InputForm text="Contraseña" input="loginPassword" type="password" placeholder=" * * * * * * " autoComplete="off" />
            <button type="submit">Ingresar</button>
        </form>
    );
};

// Export component
export default LoginForm;
