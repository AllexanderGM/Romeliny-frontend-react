// Dependencies
import { useContext } from "react";
import { Link } from "react-router-dom";

//* Components *//
// General
import LoadingPage from "../containers/LoadingPage.jsx";
import Header from "../containers/Header.jsx";
import Footer from "../containers/Footer.jsx";

// Context
import GlobalContext from "../context/GlobalContext.jsx";

//* Styles *//
import "../styles/pages/notFound.scss";

//* Data *//
import image from "../assets/img/404-img.svg";

//* Principal Component *//
const NotFound = () => {
    const { context } = useContext(GlobalContext);
    const routes = context.routes;

    return (
        <>
            <LoadingPage />
            <Header />
            <main className="notFound_container">
                <h1 className="notFound_title">404</h1>
                <img className="notFound_img" src={image} alt="Imagen del error" />
                <p className="notFound_text">
                    Ups.. Aquí estamos fabricando los zapatos, por favor regresa al inicio <br /> <span>🫡</span>
                </p>

                <Link className="notFound_btn" to={routes.home}>
                    Regresar a inicio
                </Link>
            </main>
            <Footer />
        </>
    );
};

// export component
export default NotFound;
