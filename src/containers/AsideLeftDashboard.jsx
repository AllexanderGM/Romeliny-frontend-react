// Dependencies
import { useContext } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

// Components
import AsideSeparator from "../components/atoms/AsideSeparator.jsx";
import AsideSection from "../components/molecules/AsideSection.jsx";

// Context
import GlobalContext from "../context/GlobalContext.jsx";

const AsideLeftDashboard = () => {
    const { context } = useContext(GlobalContext);
    const routes = context.routes;
    const links = context.links;

    return (
        <aside className="aside_left aside__panel">
            <h1>Panel de control</h1>

            <Link className="haside__panel__btn" to={routes.admin}>
                <ion-icon name="cube"></ion-icon>
                <span>Dashboard</span>
            </Link>

            <AsideSeparator />

            <AsideSection
                title="Administrador"
                listItems={[
                    { text: "Productos", route: routes.products, icon: "storefront" },
                    { text: "Usuarios", route: routes.users, icon: "people" },
                    { text: "Carritos de compra", route: routes.carts, icon: "cart" },
                ]}
            />

            <AsideSeparator />

            <AsideSection
                title="Sitio web"
                listItems={[
                    { text: "Actualizar datos del sitio", route: routes.admin, icon: "reload-circle" },
                    { text: "Cambiar Banners", route: routes.admin, icon: "images" },
                    { text: "Enviar correo masivo", route: routes.admin, icon: "mail" },
                ]}
            />

            <AsideSeparator />

            <AsideSection
                title="Otros"
                listItems={[
                    { text: "Volver al inicio", route: routes.home, icon: "home" },
                    { text: "Datos del chat", route: routes.store, icon: "chatbubbles" },
                    { text: "Desarrolador web", route: links.developer.web, icon: "code-slash" },
                    { text: "Diseñadora Gráfica", route: links.designer.linkedin, icon: "code-slash" },
                ]}
            />
        </aside>
    );
};

export default AsideLeftDashboard;
