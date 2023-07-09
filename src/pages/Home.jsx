//* Components  *//
// General
import LoadingPage from "../containers/LoadingPage.jsx";
import Header from "../containers/Header.jsx";
import Footer from "../containers/Footer.jsx";

// Content
import HomePresentation from "../components/HomePresentation.jsx";
import HomeCategories from "../components/HomeCategories.jsx";
import HomeProducts from "../components/HomeProducts.jsx";
import HomeAbout from "../components/HomeAbout.jsx";

//* Styles *//
import "../styles/pages/home.scss";

//* Data *//
import imgPresentation from "../assets/img/imgmain.webp";
import backgroundAbout from "../assets/img/bgabout.webp";
import logoCircle from "../assets/img/logowhite.webp";

import casual from "../assets/img/casual.jpg";
import formal from "../assets/img/formal.jpg";
import deportivo from "../assets/img/deportivo.jpg";

import whatsapp from "../assets/iconos/whatsapp.svg";
import facebook from "../assets/iconos/facebook.svg";
import instagram from "../assets/iconos/instagram.svg";
import linkedin from "../assets/iconos/linkedin.svg";

import economia from "../assets/img/economia.webp";
import calidad from "../assets/img/calidad.webp";
import envios from "../assets/img/envios.webp";
import colombia from "../assets/img/colombia.webp";

//* Principal Component *//
const Home = () => {
    return (
        <>
            <LoadingPage />
            <Header />
            <main>
                <HomePresentation
                    caption="PURO CUERO"
                    text1="Zapatos artesanales para brindarte "
                    text2="elegancia y confort en tus pies."
                    btn="CONOCE MÁS"
                    img={imgPresentation}
                />

                <HomeCategories
                    title="COMPRAR POR CATEGORIAS"
                    categoriesList={[
                        {
                            id: "casual",
                            img: casual,
                            name: "Casual",
                        },
                        {
                            id: "formal",
                            img: formal,
                            name: "Formal",
                        },
                        {
                            id: "deportivo",
                            img: deportivo,
                            name: "Deportivo",
                        },
                    ]}
                />

                <HomeProducts
                    title="NUESTROS PRODUCTOS"
                    text={[
                        "Nos preocupamos por realizar productos",
                        "de excelente calidad confeccionados",
                        "100% con cuero, transmitiendo el amor",
                        "por el arte de crear zapatos.",
                    ]}
                    items={[
                        { img: economia, text: "Los mejores precios somos distribuidores" },
                        { img: calidad, text: "Productos con buena calidad y garantia" },
                        { img: envios, text: "Envios a nivel nacional" },
                        { img: colombia, text: "Producto 100% colombiano" },
                    ]}
                />

                <HomeAbout
                    img={backgroundAbout}
                    title="CONOCÉNOS"
                    logo={logoCircle}
                    text="Somos una empresa orgullosamente colombiana dedicada a la fabricación de calzado, con el fin de brindarle
                                elegancia, confort y sobre todo comodidad al pueblo colombiano. Nuestra producción se centra especialmente
                                en la elaboración de zapato elegante hecho con los mejores materiales, garantizando calidad y duración."
                    whatsapp={whatsapp}
                    facebook={facebook}
                    instagram={instagram}
                    linkedin={linkedin}
                />
            </main>
            <Footer />
        </>
    );
};

// Export component
export default Home;
