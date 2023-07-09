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
const Register = () => {
    return (
        <>
            <LoadingPage />
            <Header />
            <main>
                <section className="register">
                    <RegisterSection title="Registrarse" />

                    <figure className="register_img">
                        <img src={imgRegistro} alt="Imagen de fondo de registro" />
                    </figure>
                </section>
            </main>
            <Footer />
        </>
    );
};

// export component
export default Register;
