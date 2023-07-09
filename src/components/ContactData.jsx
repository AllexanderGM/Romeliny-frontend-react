// Dependencies
import PropTypes from "prop-types";

// Components
import ContactDataItem from "./atoms/ContactDataItem";
import LinkIcon from "./atoms/LinkIcon";

// Principal component
const ContactData = ({ title, data, social }) => {
    const listData = data.map((item, index) => {
        return <ContactDataItem key={index} icon={item.icon} h2={item.title} text={item.text} />;
    });

    const listSocial = social.map((item, index) => {
        return <LinkIcon key={index} link={item.link} icon={item.icon} />;
    });

    return (
        <section className="contact_data">
            <h1 className="contact_data_title">{title}</h1>

            <ul className="data">{listData}</ul>

            <ul className="contact_social">{listSocial}</ul>
        </section>
    );
};

// Validation component
ContactData.propTypes = {
    title: PropTypes.string.isRequired,
    data: PropTypes.array.isRequired,
    social: PropTypes.array.isRequired,
};

// Export component
export default ContactData;
