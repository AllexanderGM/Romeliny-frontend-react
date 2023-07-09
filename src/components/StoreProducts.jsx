// Dependencies
import PropTypes from "prop-types";

// Components
import StoreProduct from "./molecules/StoreProduct.jsx";

// Component principal
const StoreProducts = ({ products }) => {
    let listProducts = [];

    if (products.length === 0) {
        listProducts = <h3 className="loading">Cargando...</h3>;
    } else if (Object.values(products[0]).length === 1) {
        listProducts = <h3 className="error">Ups... tenemos un error. {products[0].error} </h3>;
    } else {
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
                />
            );
        });
    }

    return <section className="products">{listProducts}</section>;
};

// Validation component
StoreProducts.propTypes = {
    products: PropTypes.array.isRequired,
};

// Export component
export default StoreProducts;
