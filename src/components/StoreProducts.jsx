// Dependencies
import PropTypes from "prop-types";

// Components
import StoreProduct from "./molecules/StoreProduct.jsx";
import Spinner from "react-bootstrap/Spinner";

// Component principal
const StoreProducts = ({ products }) => {
    let listProducts = [];
    let containterClass = "products";

    if (products.length === 0) {
        containterClass = "products exception";
        listProducts = <Spinner animation="border" />;
    } else if (Object.values(products[0]).length === 1) {
        containterClass = "products exception";
        listProducts = <h3 className="error">Ups... tenemos un error. {products[0].error} </h3>;
    } else {
        containterClass = "products";
        listProducts = products.map((item, index) => {
            return (
                <StoreProduct
                    key={index}
                    img={item.img}
                    category={item.category}
                    name={item.name}
                    description={item.description}
                    code={item.code}
                    stock={item.stock}
                    price={item.price}
                    colors={["white", "green", "red", "blue", "black"]}
                    sizes={[36, 37, 38, 39, 40, 41, 42, 43, 44, 45]}
                />
            );
        });
    }

    return <section className={containterClass}>{listProducts}</section>;
};

// Validation component
StoreProducts.propTypes = {
    products: PropTypes.array.isRequired,
};

// Export component
export default StoreProducts;
