// Dependencies
import PropTypes from "prop-types";

// Components
import LinkIcon from "../atoms/LinkIcon";

// Principal component
const FooterTeam = ({ role, name, people }) => {
    const listItems = people.map((item, index) => {
        return <LinkIcon key={index} link={item.link} icon={item.icon} />;
    });

    return (
        <article className="developer">
            <p>
                <b>{role}</b>
                <br />
                {name}
            </p>

            <figure className="footer_social">{listItems}</figure>
        </article>
    );
};

// Validation props
FooterTeam.propTypes = {
    role: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    people: PropTypes.array.isRequired,
};

// Export component
export default FooterTeam;
