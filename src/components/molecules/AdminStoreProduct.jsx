// Dependencies
import { useContext, useState } from "react";
import PropTypes from "prop-types";

// Components
import AdminStoreProductContainer from "../atoms/AdminStoreProductContainer";

import GlobalContext from "../../context/GlobalContext";

// Principal component
const AdminStoreProduct = ({ img, category, name, description, code, colors, sizes, stock, price }) => {
    const { context } = useContext(GlobalContext);
    const [selectedColor, setSelectedColor] = useState("");
    const [selectedSize, setSelectedSize] = useState("");

    price = price.toLocaleString("es-CO", {
        style: "currency",
        currency: "COP",
    });

    const handleColorChange = (event) => {
        setSelectedColor(event.target.value);
    };

    const handleSizeChange = (event) => {
        setSelectedSize(event.target.value);
    };

    const colorsList = colors.map((item, index) => {
        const selected = selectedColor === item;

        return (
            <li key={index}>
                <label>
                    <input
                        style={{ color: item }}
                        type="radio"
                        name="option_color"
                        value={item}
                        checked={selected}
                        onChange={handleColorChange}
                    />
                    <ion-icon style={{ color: item, border: selected ? `1px solid var(--neutralDark)` : false }} name="ellipse"></ion-icon>
                </label>
            </li>
        );
    });

    const sizesList = sizes.map((item, index) => {
        const selected = selectedSize == item;

        return (
            <li key={index}>
                <label style={{ color: selected ? `var(--primary)` : false, border: selected ? `1px solid var(--primary)` : false }}>
                    <input type="radio" name="option_size" value={item} checked={selected} onChange={handleSizeChange} />
                    {item}
                </label>
            </li>
        );
    });

    return (
        <div className="product">
            <figure className="product_img">
                <img src={img} alt={`Imagen del producto ${name}`} />
            </figure>

            <div className="container_info">
                <AdminStoreProductContainer category={category} />

                <p className="product_code">
                    <strong>REFERENCIA: </strong> {code}
                </p>

                <div className="container_title_price">
                    <h1 className="product_title">{name}</h1>

                    <p className="product_price">
                        <strong className="price">{price} </strong>
                    </p>
                </div>

                <p className="product_description">
                    <strong>DESCRIPCIÓN</strong>
                    {description}
                </p>

                <form className="product_form">
                    <div className="product_options">
                        <strong>SELECIONA EL COLOR</strong>
                        <ul className="select_color">{colorsList}</ul>
                    </div>

                    <div className="product_options">
                        <strong>SELECIONA LA TALLA</strong>
                        <ul className="select_size">{sizesList}</ul>
                    </div>

                    <a
                        className="product_btn"
                        href={`https://api.whatsapp.com/send/?phone=573142467055&text=Me+gustar%C3%ADa+comprar+el+producto+${name}+con+referencia+${code},+el+color+que+elegí+es+el+${selectedColor}+y+la+talla+es+${selectedSize}.+Gracias.&type=phone_number&app_absent=0`}
                    >
                        Eliminar
                    </a>
                </form>
            </div>
        </div>
    );
};

// Validation props
AdminStoreProduct.propTypes = {
    img: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    code: PropTypes.string.isRequired,
    stock: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired,
};

// Export component
export default AdminStoreProduct;
