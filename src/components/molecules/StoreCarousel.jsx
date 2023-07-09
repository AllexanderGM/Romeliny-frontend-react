// Dependencies
import PropTypes from "prop-types";

// components
import Carousel from "react-bootstrap/Carousel";

// Principal component
const StoreCarousel = ({ bannersList }) => {
    const banners = bannersList.map((item, index) => {
        return (
            <Carousel.Item key={index}>
                <img className="d-block w-100" src={item} alt={`imagen del producto ${item}`} />
            </Carousel.Item>
        );
    });

    return <Carousel>{banners}</Carousel>;
};

// Validation props
StoreCarousel.propTypes = {
    bannersList: PropTypes.array.isRequired,
};

// Export components
export default StoreCarousel;
