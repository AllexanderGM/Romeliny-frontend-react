// Dependencias
import PropTypes from "prop-types";
import { useLocation } from "react-router-dom";

// Componentes
import StoreProduct from "./molecules/StoreProduct.jsx";
import Spinner from "react-bootstrap/Spinner";

// Componente principal
const StoreProducts = ({ products }) => {
    const location = useLocation().pathname.split("/")[1];

    let listProducts = products.map((item, index) => <StoreProduct key={index} item={item} />);
    let containerClass = "products";

    if (products.length === 0) {
        containerClass = "products exception";
        listProducts = <Spinner animation="border" />;
    } else if (products[0].error) {
        containerClass = "products exception";
        listProducts = <h3 className="error">Ups... tenemos un error. {products[0].error} </h3>;
    } else {
        listProducts = products.map((item, index) => <StoreProduct key={index} item={item} location={location} />);
    }

    console.log(location);

    return <section className={`${containerClass} ${location}Location`}>{listProducts}</section>;
};

// Validación de propiedades del componente
StoreProducts.propTypes = {
    products: PropTypes.array.isRequired,
};

// Exportar componente
export default StoreProducts;
