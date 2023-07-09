// Dependencies
import { useState } from "react";

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

// Principal component
const Header = () => {
    // Estado para abrir y cerrar el aside y login
    const [asideShow, setAsideShow] = useState(false);
    const [loginShow, setLoginShow] = useState(false);

    // Funciones para abrir y cerrar el aside y login
    const asideHandleClose = () => setAsideShow(false);
    const asideHandleShow = () => setAsideShow(true);

    const loginHandleClose = () => setLoginShow(false);
    const loginHandleShow = () => setLoginShow(true);

    return (
        <>
            <header>
                <section>
                    <HeaderLeft>
                        <BtnMenu asideHandleShow={asideHandleShow} />
                        <Logo />
                    </HeaderLeft>

                    {/* <HeaderCenter nav={["Inicio", "Tienda", "Contáctanos", "Información"]} /> */}
                    <HeaderCenter nav={["Inicio", "Tienda", "Contáctanos"]} />

                    <HeaderRigth>
                        <HeaderNavButton loginHandleShow={loginHandleShow} />
                        <HeaderNavIcon />
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
