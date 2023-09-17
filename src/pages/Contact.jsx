//* Dependencies *//
import { useContext } from "react";

//* Components *//
// General
import LoadingPage from "../containers/LoadingPage.jsx";
import Header from "../containers/Header.jsx";
import Footer from "../containers/Footer.jsx";

// Content
import ContactData from "../components/ContactData.jsx";
import ContactMessage from "../components/ContactMessage.jsx";

// * Context * //
import GlobalContext from "../context/GlobalContext.jsx";

//* Styles *//
import "../styles/pages/contact.scss";

//* Principal Component *//
const Contact = () => {
    const { context } = useContext(GlobalContext);
    const links = context.links;

    return (
        <>
            <LoadingPage />
            <Header />
            <main>
                <section className="contact">
                    <ContactData
                        title="Ponte en contacto con nosotros"
                        data={[
                            {
                                icon: "location-outline",
                                title: "Nuestra oficina principal",
                                text: "Calle 20 #24f-49 sur barrio el restrepo",
                            },
                            { icon: "call-outline", title: "LLamadas", text: "+57 314 246 70 55" },
                            { icon: "mail-outline", title: "Correo electrónico", text: "calzadoromeliny2004@gmail.com" },
                        ]}
                        social={[
                            { link: links.facebook, icon: "logo-facebook" },
                            { link: links.instagram, icon: "logo-instagram" },
                            { link: links.linkedin, icon: "logo-linkedin" },
                            { link: links.linkedin, icon: "logo-whatsapp" },
                        ]}
                    />

                    <ContactMessage
                        title="Envianos un mensaje"
                        text="Recuerda antes de enviar un mensaje identificarte y agregar el asunto. Esperamos tu mensaje."
                    />
                </section>

                <div
                    className="badge-base LI-profile-badge"
                    data-locale="es_ES"
                    data-size="medium"
                    data-theme="dark"
                    data-type="VERTICAL"
                    data-vanity="jeisson-alexander"
                    data-version="v1"
                ></div>
            </main>
            <Footer />
        </>
    );
};

// Export component
export default Contact;
