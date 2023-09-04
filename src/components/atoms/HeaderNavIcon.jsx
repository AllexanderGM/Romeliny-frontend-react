// Dependencies
import { useContext } from "react";
import { Link } from "react-router-dom";

// Context
import GlobalContext from "../../context/GlobalContext";

// Principal component
const HeaderNavIcon = () => {
    // Información tomada del contexto
    const { context } = useContext(GlobalContext);
    const routes = context.routes;

    return (
        <>
            <li className="header_nav_item">
                <Link to={routes.cart} className="header_nav_item_link">
                    <ion-icon name="cart-outline"></ion-icon>
                </Link>
            </li>
        </>
    );
};

// Export component
export default HeaderNavIcon;
