// Dependencies
import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

// Components
import StoreCategory from "./atoms/StoreCategory";

// Principal component
const StoreStart = ({ title, products }) => {
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        const categoriesList = products
            .map((product) => product.category)
            .filter((element, index, self) => {
                return self.indexOf(element) === index;
            })
            .map((category, index) => {
                return <StoreCategory key={index} text={category} />;
            });

        setCategories(categoriesList);
    }, [products]);

    return (
        <section className="start">
            <h1 className="start_title">{title}</h1>

            <div className="start_separator"></div>

            <ul className="categories">{categories}</ul>
        </section>
    );
};

// Validation props
StoreStart.propTypes = {
    title: PropTypes.string.isRequired,
};

// Export component
export default StoreStart;
