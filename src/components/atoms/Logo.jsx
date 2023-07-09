// Dependencies
import { useContext } from "react";

// Context
import GlobalContext from "../../context/GlobalContext.jsx";

// Principal component
const Logo = () => {
    // Datos obtenidos de context
    const { routes, general } = useContext(GlobalContext);

    // Construcción de la url para el logo
    const urlLogo = new URL(`../../assets/${general.plainLogo}`, import.meta.url).pathname;

    return (
        <a href={routes.home} className="header_logo">
            <img className="header_logo_img" src={urlLogo} alt="Imagen del logo de romeliny" />
            <h3 className="header_logo_text">
                R<span>o</span>meliny
            </h3>
        </a>
    );
};

// Export component
export default Logo;
