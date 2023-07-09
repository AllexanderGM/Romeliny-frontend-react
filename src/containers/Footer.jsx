// Dependencies
import { useContext } from "react";

// Components
import FooterSeparator from "../components/atoms/FooterSeparator.jsx";
import FooterLogo from "../components/molecules/FooterLogo.jsx";
import FooterNav from "../components/molecules/FooterNav.jsx";
import FooterTeam from "../components/molecules/FooterTeam.jsx";

// Context
import GlobalContext from "../context/GlobalContext.jsx";

// Resources
import imgLogoWhite from "../assets/img/logo-white.svg";

const Footer = () => {
    // Data obtenida del contexto glabal
    const { routes, links } = useContext(GlobalContext);

    return (
        <footer>
            <section className="footer_container">
                <section className="footer_information">
                    <FooterLogo
                        img={imgLogoWhite}
                        listLinks={[
                            { link: links.whatsapp, icon: "logo-whatsapp" },
                            { link: links.facebook, icon: "logo-facebook" },
                            { link: links.instagram, icon: "logo-instagram" },
                            { link: links.linkedin, icon: "logo-linkedin" },
                        ]}
                    />

                    <FooterSeparator />

                    <FooterNav
                        text1="INFORMACIÖN"
                        information={[
                            { route: routes.contact, text: "Conocénos" },
                            { route: routes.about, text: "Sobre nosotros" },
                            { route: routes.termsConditions, text: "Terminos y condiciones" },
                        ]}
                        text2="SOCIAL"
                        social={[
                            { link: links.facebook, text: "Facebook" },
                            { link: links.instagram, text: "Instagram" },
                            { link: links.linkedin, text: "Linkedin" },
                        ]}
                    />

                    <article className="team">
                        <FooterTeam
                            role="Diseñadora"
                            name="Liliana Camargo"
                            people={[
                                { link: links.designer.instagram, icon: "logo-instagram" },
                                { link: links.designer.linkedin, icon: "logo-linkedin" },
                            ]}
                        />

                        <FooterTeam
                            role="Desarrollador web"
                            name="Jeisson Gavilán"
                            people={[
                                { link: links.developer.web, icon: "earth-outline" },
                                { link: links.developer.instagram, icon: "logo-instagram" },
                                { link: links.developer.linkedin, icon: "logo-linkedin" },
                                { link: links.developer.github, icon: "logo-github" },
                            ]}
                        />
                    </article>
                </section>

                <section className="footer_duty">
                    <p>COPYRIGHT © 2022 ROMELINY TODOS LOS DERECHOS RESERVADOS</p>
                </section>
            </section>
        </footer>
    );
};

// Export component
export default Footer;
