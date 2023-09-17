// Dependencies
import { useContext } from "react";
import PropTypes from "prop-types";

import DashboardAsideProduct from "../components/molecules/DashboardAsideProduct.jsx";

const AsideRigthDashboard = () => {
    return (
        <aside className="dashboard_aside_right">
            <section>
                <div className="d-flex">
                    <div className="dropdown me-1">
                        <button
                            type="button"
                            className="dropdown-toggle dashboard_aside_right-btn"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                            data-bs-offset="10,20"
                        >
                            {/* <img src={userAdmin} alt="" /> */}
                            <span>Administrador</span>
                        </button>
                        <ul className="dropdown-menu">
                            <li>
                                <a className="dropdown-item" href="#">
                                    <ion-icon name="settings-sharp"></ion-icon> <span>Configuración</span>
                                </a>
                            </li>
                            <li>
                                <a className="dropdown-item" href="#">
                                    <ion-icon name="power-sharp"></ion-icon> <span>Cerrar sesión</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>

            <section className="dashboard_aside_right-body">
                <article className="dashboard_aside_right-body_productos">
                    <h2>Productos populares</h2>
                    <DashboardAsideProduct img="" nombre="Zapato casual" precio="$100.000" />
                    <DashboardAsideProduct img="" nombre="Zapato formal" precio="$160.000" />
                    <DashboardAsideProduct img="" nombre="Zapato deportivo" precio="$80.000" />
                </article>
                <article className="dashboard_aside_right-body_chat">
                    <h2>Chat</h2>
                    <DashboardAsideProduct img="" nombre="Mark" precio="¿Cuanto vale si tiene..." />
                    <DashboardAsideProduct img="" nombre="Jacob" precio="¿Cuando llega mi pedido?" />
                    <DashboardAsideProduct img="" nombre="Larry" precio="Gracias!" />
                </article>
            </section>
        </aside>
    );
};

// Validation props
AsideRigthDashboard.propTypes = {
    /*  asideShow: PropTypes.bool.isRequired,
    asideHandleClose: PropTypes.func.isRequired, */
};

// Export component
export default AsideRigthDashboard;
