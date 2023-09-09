//* Components *//
// General
import LoadingPage from "../containers/LoadingPage.jsx";
import Header from "../containers/Header.jsx";
import Footer from "../containers/Footer.jsx";

// Content
import RegisterSection from "../components/RegisterSection.jsx";

//* Styles *//
import "../styles/pages/register.scss";

//* Assets *//
import imgRegistro from "../assets/img/registro.jpg";

//* Principal Component *//
const NotFound = () => {
    return (
        <>
            <LoadingPage />
            <Header />
            <main>NotFound</main>
            <Footer />
        </>
    );
};

// export component
export default NotFound;
