// Dependencies
import PropTypes from "prop-types";

// Components
import StoreCarousel from "./molecules/StoreCarousel";
import StoreCategory from "./atoms/StoreCategory";

// Principal component
const StoreStart = ({ title, bannersList }) => {
    return (
        <section className="start">
            <StoreCarousel bannersList={bannersList} />

            <h1 className="start_title">{title}</h1>

            <div className="start_separator"></div>

            <ul className="categories">
                <StoreCategory text="Todos" />
                <StoreCategory text="Formal" />
                <StoreCategory text="Casual" />
                <StoreCategory text="Deportivo" />
            </ul>
        </section>
    );
};

// Validation props
StoreStart.propTypes = {
    title: PropTypes.string.isRequired,
    bannersList: PropTypes.array.isRequired,
};

// Export component
export default StoreStart;
