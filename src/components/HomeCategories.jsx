// Dependencies
import { useContext } from "react";
import PropTypes from "prop-types";

// Components
import HomeCategory from "./atoms/HomeCategory.jsx";

// Context
import GlobalContext from "../context/GlobalContext.jsx";

// Principal component
const HomeCategories = ({ title, categoriesList }) => {
    const { routes } = useContext(GlobalContext);

    const categories = categoriesList.map((item, index) => {
        return <HomeCategory key={index} link={routes.store} id={item.id} img={item.img} name={item.name} />;
    });

    return (
        <section className="categories">
            <article className="categories_title">
                <div className="separator"></div>
                <h2 className="separator_title">{title}</h2>
                <div className="separator"></div>
            </article>
            <div className="categories_container">{categories}</div>
        </section>
    );
};

// Validation component
HomeCategories.propTypes = {
    title: PropTypes.string.isRequired,
    categoriesList: PropTypes.array.isRequired,
};

// Export component
export default HomeCategories;
