// Dependencies
import PropTypes from "prop-types";

// Components
import HomeProductsItem from "./atoms/HomeProductsItem.jsx";

// Principal component
const HomeProducts = ({ title, text, items }) => {
    return (
        <section className="home_products">
            <article className="home_products_article">
                <h1 className="home_products_title">{title}</h1>
                <p className="home_products_text">
                    {text[0]}
                    <br />
                    {text[1]}
                    <br />
                    {text[2]}
                    <br />
                    {text[3]}
                </p>
            </article>
            <div className="home_products_separador"></div>
            <article className="home_products_component">
                <div className="home_products_component_colum">
                    <HomeProductsItem img={items[0].img} text={items[0].text} />
                    <HomeProductsItem img={items[1].img} text={items[1].text} />
                </div>
                <div className="home_products_component_colum">
                    <HomeProductsItem img={items[2].img} text={items[2].text} />
                    <HomeProductsItem img={items[3].img} text={items[3].text} />
                </div>
            </article>
        </section>
    );
};

// Validation component
HomeProducts.propTypes = {
    title: PropTypes.string.isRequired,
    text: PropTypes.array.isRequired,
    items: PropTypes.array.isRequired,
};

// Export component
export default HomeProducts;
