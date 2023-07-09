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
import imgPresentation from "../assets/img/imgMain.png";
import backgroundAbout from "../assets/img/bgAbout.png";
import logoCircle from "../assets/img/logoCircle.svg";

import whatsapp from "../assets/iconos/whatsapp.svg";
import facebook from "../assets/iconos/facebook.svg";
import instagram from "../assets/iconos/instagram.svg";
import linkedin from "../assets/iconos/linkedin.svg";

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
                            img: "casual.jpg",
                            name: "Casual",
                        },
                        {
                            id: "formal",
                            img: "formal.jpg",
                            name: "Formal",
                        },
                        {
                            id: "deportivo",
                            img: "deportivo.jpg",
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
                        { img: "economia.png", text: "Los mejores precios somos distribuidores" },
                        { img: "calidad.png", text: "Productos con buena calidad y garantia" },
                        { img: "envios.png", text: "Envios a nivel nacional" },
                        { img: "colombia.png", text: "Producto 100% colombiano" },
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
