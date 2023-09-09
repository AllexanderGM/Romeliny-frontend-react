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

    async function login(data) {
        let dataResponse = null;

        const optionsFetch = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        };

        try {
            const response = await fetch(`${url_api}/login`, optionsFetch);
            dataResponse = await response.json();
        } catch (error) {
            console.error("Error al autenticarse con el servidor:", error);
        }

        try {
            const user = dataResponse.user;
            const isActive = dataResponse.session;
            const dataUser = {
                name: user.fullname,
                email: user.email,
                age: user.age,
                phone: user.phone,
                active: isActive,
                admin: user.admin,
            };

            setContext({
                ...context,
                user: dataUser,
            });
            navigate("/user");
        } catch (error) {
            console.error("Error al iniciar sesión:", error);
        }
    }

    const HandlerLogin = (event) => {
        event.preventDefault();

        const loginData = {
            email: event.target.loginEmail.value,
            password: event.target.loginPassword.value,
        };

        login(loginData);
    };

    return (
        <form className="login_form" action="POST" onSubmit={HandlerLogin}>
            <InputForm text="Correo" input="loginEmail" type="mail" placeholder=" ejemplo@romeliny.com" autoComplete="on" />
            <InputForm text="Contraseña" input="loginPassword" type="password" placeholder=" * * * * * * " autoComplete="off" />
            <button type="submit">Ingresar</button>
        </form>
    );
};

// Export component
export default LoginForm;
