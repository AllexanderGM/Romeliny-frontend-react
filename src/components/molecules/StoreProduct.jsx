// Dependencies
import { useContext } from "react";
import PropTypes from "prop-types";

// Components
import StoreProductContainer from "../atoms/StoreProductContainer";

import GlobalContext from "../../context/GlobalContext";

// Principal component
const StoreProduct = ({ img, category, name, description, code, stock, price }) => {
    const { links } = useContext(GlobalContext);

    return (
        <div className="product">
            <figure className="product_img">
                <img src={img} alt={`Imagen del producto ${name}`} />
            </figure>

            <StoreProductContainer category={category} />

            <h1 className="product_title">{name}</h1>

            <p className="product_description">
                {description}
            </p>

            <p className="product_code">
                <strong>Referencia: </strong> {code}
            </p>

            {/* <p className="product_stock">
                <strong>Existencia: </strong> {stock}
            </p> */}

            <p className="product_price">
                <strong className="price">${price} </strong>
            </p>

            <a
                href={`https://api.whatsapp.com/send/?phone=573142467055&text=Me+gustar%C3%ADa+tener+mas+informacion+del+producto+con+referencia+${code}&type=phone_number&app_absent=0`}
                className="product_btn"
            >
                Comprar
            </a>
        </div>
    );
};

// Validation props
StoreProduct.propTypes = {
    img: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    code: PropTypes.string.isRequired,
    stock: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired,
};

// Export component
export default StoreProduct;
