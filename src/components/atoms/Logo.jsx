// Dependencies
import { useContext } from "react";

// Context
import GlobalContext from "../../context/GlobalContext.jsx";

// Assets
import logo from "../../assets/logo.webp";

// Principal component
const Logo = () => {
    // Datos obtenidos de context
    const { context } = useContext(GlobalContext);
    const routes = context.routes;

    return (
        <a href={routes.home} className="header_logo">
            <img className="header_logo_img" src={logo} alt="Imagen del logo de romeliny" />
            <h3 className="header_logo_text">
                R<span>o</span>meliny
            </h3>
        </a>
    );
};

// Export component
export default Logo;
