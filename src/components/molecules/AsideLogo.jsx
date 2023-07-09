// Dependencies
import PropTypes from "prop-types";

// Components
import Logo from "../atoms/Logo";

// Principal component
const AsideLogo = ({ asideHandleClose }) => {
    return (
        <section className="aside_logo">
            <Logo />

            <button className="btn_menu" onClick={() => asideHandleClose(false)}>
                <ion-icon name="close-circle-outline"></ion-icon>
            </button>
        </section>
    );
};

// Validation props
AsideLogo.propTypes = {
    asideHandleClose: PropTypes.func.isRequired,
};

// Export component
export default AsideLogo;
