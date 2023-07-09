// Dependencies
import { useContext } from "react";
import PropTypes from "prop-types";

// Components
import AsideSeparator from "../components/atoms/AsideSeparator.jsx";
import AsideLogo from "../components/molecules/AsideLogo.jsx";
import AsideSection from "../components/molecules/AsideSection.jsx";

// Components bootstrap
import Offcanvas from "react-bootstrap/Offcanvas";

// Context
import GlobalContext from "../context/GlobalContext.jsx";
import AsideSectionSocial from "../components/molecules/AsideSectionSocial.jsx";

// Principal component
const AsideLeft = ({ asideShow, asideHandleClose }) => {
    const { routes } = useContext(GlobalContext);
    const { links } = useContext(GlobalContext);

    return (
        <Offcanvas show={asideShow} onHide={asideHandleClose} className="aside_left">
            <AsideLogo asideHandleClose={asideHandleClose} />

            <AsideSeparator />

            <AsideSection
                title="Navegación"
                listItems={[
                    { text: "Inicio", route: routes.home, icon: "home-outline" },
                    { text: "Tienda", route: routes.store, icon: "storefront-outline" },
                    { text: "Contáctanos", route: routes.contact, icon: "call-outline" },
                    { text: "Información", route: routes.about, icon: "alert-outline" },
                ]}
            />

            <AsideSeparator />

            <AsideSection
                title="Categorias"
                listItems={[
                    { text: "Formal", route: routes.store, icon: "bag-outline" },
                    { text: "Casual", route: routes.store, icon: "footsteps-outline" },
                    { text: "Deportivo", route: routes.store, icon: "bicycle-outline" },
                ]}
            />

            <AsideSeparator />

            <AsideSection
                title="Acerca de Romeliny"
                listItems={[
                    { text: "Información corporativa", route: routes.corporateInformation, icon: "diamond-outline" },
                    { text: "Terminos y condiciones", route: routes.termsConditions, icon: "document-text-outline" },
                    { text: "Equipo de desarrollo", route: routes.about, icon: "code-slash-outline" },
                ]}
            />

            <AsideSeparator />

            <AsideSectionSocial
                title="Social"
                listItems={[
                    { icon: "logo-facebook", route: links.facebook },
                    { icon: "logo-instagram", route: links.instagram },
                    { icon: "logo-linkedin", route: links.linkedin },
                    { icon: "logo-whatsapp", route: links.whatsapp },
                ]}
            />

            <AsideSeparator />

            <section className="duty">
                <p>COPYRIGHT © 2022 ROMELINY</p>
            </section>
        </Offcanvas>
    );
};

// Validation props
AsideLeft.propTypes = {
    asideShow: PropTypes.bool.isRequired,
    asideHandleClose: PropTypes.func.isRequired,
};

// Export component
export default AsideLeft;
