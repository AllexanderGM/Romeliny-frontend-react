// Dependencies
import { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";

// Components
import HeaderLeft from "../components/molecules/HeaderLeft";
import BtnMenu from "../components/atoms/BtnMenu.jsx";
import Logo from "../components/atoms/Logo.jsx";
import HeaderCenter from "../components/molecules/HeaderCenter.jsx";
import HeaderRigth from "../components/molecules/HeaderRigth.jsx";
import HeaderNavButton from "../components/atoms/HeaderNavButton";
import HeaderNavIcon from "../components/atoms/HeaderNavIcon.jsx";
import AsideLeft from "../containers/AsideLeft.jsx";
import HeaderModalLogin from "../containers/HeaderModalLogin";

// Context
import GlobalContext from "../context/GlobalContext.jsx";

// Principal component
const Header = () => {
    const navigate = useNavigate();

    const { context } = useContext(GlobalContext);
    const activeUser = context.user.active;

    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener("scroll", onScroll);

        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const ButtonRegister = (
        <li>
            {/* <button className="header_nav_item active register" onClick={() => navigate("/register")}>
                Registrarse
            </button> */}
        </li>
    );

    let loginButton;
    let classButton;
    let carButton;

    // Estado para abrir y cerrar el aside y login
    const [asideShow, setAsideShow] = useState(false);
    const [loginShow, setLoginShow] = useState(false);

    // Funciones para abrir y cerrar el aside y login
    const asideHandleClose = () => setAsideShow(false);
    const asideHandleShow = () => setAsideShow(true);

    const loginHandleClose = () => setLoginShow(false);
    const loginHandleShow = () => setLoginShow(true);

    if (activeUser) {
        loginButton = <ion-icon class="open_login" name="person-circle-outline"></ion-icon>;
        classButton = "header_nav_item";
        carButton = <HeaderNavIcon />;
    } else {
        loginButton = "Iniciar sesion";
        classButton = "header_nav_item active";
        carButton = ButtonRegister;
    }

    return (
        <>
            <header className={`header${scrolled ? " scrolled" : ""}`}>
                <section>
                    <HeaderLeft>
                        <BtnMenu asideHandleShow={asideHandleShow} />
                        <Logo />
                    </HeaderLeft>

                    <HeaderCenter nav={["Inicio", "Tienda", "Contáctanos"]} />

                    <HeaderRigth>
                        <HeaderNavButton loginHandleShow={loginHandleShow} loginButton={loginButton} classButton={classButton} />
                        {carButton}
                    </HeaderRigth>
                </section>
            </header>

            <AsideLeft asideShow={asideShow} asideHandleClose={asideHandleClose} />
            <HeaderModalLogin loginShow={loginShow} loginHandleClose={loginHandleClose} />
        </>
    );
};

// Export component
export default Header;
