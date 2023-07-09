//* --- | Components | --- *//
// General
import LoadingPage from "../containers/LoadingPage.jsx";
import Header from "../containers/Header.jsx";
import Footer from "../containers/Footer.jsx";

// Content

//* --- | Styles | --- *//
import "../styles/pages/register.scss";

const About = () => {
    return (
        <>
            <LoadingPage />
            <Header />
            <main>Acerca de</main>
            <Footer />
        </>
    );
};

export default About;
