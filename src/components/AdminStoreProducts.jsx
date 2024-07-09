// Dependencies
import PropTypes from "prop-types";
import { useLocation } from "react-router-dom";

// Components
import AdminStoreProduct from "./molecules/AdminStoreProduct.jsx";
import Spinner from "react-bootstrap/Spinner";

// Component principal
const AdminStoreProducts = ({ products }) => {
    const location = useLocation().pathname.split("/")[1];
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
                <AdminStoreProduct
                    key={index}
                    img={item.img}
                    category={item.category}
                    name={item.name}
                    description={item.description}
                    code={item.code}
                    stock={item.stock}
                    price={item.price}
                    colors={item.colors}
                    sizes={item.sizes}
                />
            );
        });
    }

    console.log(location);

    return <section className={`${containterClass} ${location}Location`}>{listProducts}</section>;
};

// Validation component
AdminStoreProducts.propTypes = {
    products: PropTypes.array.isRequired,
};

// Export component
export default AdminStoreProducts;
