// Dependencies
import PropTypes from "prop-types";

// Principal component
const BtnMenu = ({ asideHandleShow }) => {
    return (
        <>
            <button className="btn_menu" onClick={asideHandleShow}>
                <ion-icon name="grid"></ion-icon>
            </button>
        </>
    );
};

// Validation props
BtnMenu.propTypes = {
    asideHandleShow: PropTypes.func.isRequired,
};

// Export component
export default BtnMenu;
