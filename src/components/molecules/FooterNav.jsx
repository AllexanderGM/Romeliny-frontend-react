// Dependencies
import PropTypes from "prop-types";

// Components
import LinkText from "../atoms/LinkText";
import LinkRoute from "../atoms/LinkRoute";

// Principal component
const FooterNav = ({ text1, information, text2, social }) => {
    const listInformation = information.map((item, index) => {
        return <LinkRoute key={index} link={item.route} text={item.text} />;
    });

    const listSocial = social.map((item, index) => {
        return <LinkText key={index} link={item.link} text={item.text} />;
    });

    return (
        <nav className="footer_nav">
            <ul>
                <li>{text1}</li>
                {listInformation}
            </ul>
            <ul>
                <li>{text2}</li>
                {listSocial}
            </ul>
        </nav>
    );
};

// Validation props
FooterNav.propTypes = {
    text1: PropTypes.string.isRequired,
    information: PropTypes.array.isRequired,
    text2: PropTypes.string.isRequired,
    social: PropTypes.array.isRequired,
};

// Export component
export default FooterNav;
