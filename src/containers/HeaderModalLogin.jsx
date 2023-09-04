// Dependencies
import { useContext } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

// Components
import LoginForm from "../components/molecules/LoginForm.jsx";
// Components bootstrap
import Modal from "react-bootstrap/Modal";

// Context
import GlobalContext from "../context/GlobalContext.jsx";

// Component principal
const HeaderModalLogin = ({ loginShow, loginHandleClose }) => {
    // data optenida del contexto global
    const { context } = useContext(GlobalContext);
    const routes = context.routes;

    return (
        <Modal show={loginShow} onHide={loginHandleClose} backdrop="static" keyboard={false}>
            <Modal.Header>
                <h3 className="login_title">Iniciar sesión</h3>

                <button className="login_close" onClick={() => loginHandleClose(false)}>
                    <ion-icon name="close-circle-outline"></ion-icon>
                </button>
            </Modal.Header>

            <Modal.Body>
                <LoginForm />

                <Link className="register" to={routes.register}>
                    <p>
                        ¿No estas registrado? <span> Registrate. </span>
                    </p>
                </Link>
            </Modal.Body>
        </Modal>
    );
};

// Validation props
HeaderModalLogin.propTypes = {
    loginShow: PropTypes.bool.isRequired,
    loginHandleClose: PropTypes.func.isRequired,
};

// Export component
export default HeaderModalLogin;
