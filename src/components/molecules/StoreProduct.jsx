// Dependencies
import { useState } from "react";
import PropTypes from "prop-types";
import { useLocation } from "react-router-dom";

// Components
import StoreProductContainer from "../atoms/StoreProductContainer";

// Principal component
const StoreProduct = ({ item }) => {
    const [selectedColor, setSelectedColor] = useState("");
    const attributesKeys = ["GENDER", "MODEL", "FOOTWEAR_MATERIAL", "OUTSOLE_MATERIAL"];
    const location = window.location.href;
    console.log(useLocation().pathname + "?product=" + item.id);

    const imgProduct = item.variations[0].img;
    const category = item.attributes
        .map((item) => (attributesKeys.includes(item.id) ? item.value[0] : null))
        .filter((item) => item !== null)
        .join(" | ");

    const uniqueImages = [];
    const colorSet = new Set();

    for (const variant of item.variations) {
        if (!colorSet.has(variant.name)) {
            uniqueImages.push(variant);
            colorSet.add(variant.name);
        }
    }

    let price = item.price.toLocaleString("es-CO", {
        style: "currency",
        currency: "COP",
    });

    const handleColorChange = (event) => {
        setSelectedColor(event.target.value);

        console.log(event.target.value);
    };

    const variationsList = uniqueImages.map((item, index) => {
        const selected = selectedColor === item.img;

        return (
            <li key={index}>
                <label style={{ border: selected ? `1px solid var(--neutralDark)` : false }}>
                    <input
                        type="radio"
                        name="option_color"
                        value={item.name}
                        checked={selected}
                        onChange={handleColorChange}
                    />

                    <img src={item.img} alt={`Imagen del producto ${item.name}`} />
                </label>
            </li>
        );
    });

    return (
        <article className="product">
            <figure className="product_img">
                <img src={imgProduct} alt={`Imagen del producto ${item.name}`} />
            </figure>

            <article className="container_info">
                <StoreProductContainer category={category} item={item} color={selectedColor} />

                <p className="product_code">
                    <strong>CÓDIGO: </strong> {item.id}
                </p>

                <article className="container_title_price">
                    <h1 className="product_title">{item.name}</h1>

                    <p className="product_price">
                        <strong className="price">{price} </strong>
                    </p>
                </article>

                <article className="product_form">
                    <article className="product_options">
                        <strong>VARIANTES DISPONIBLES</strong>
                        <ul className="select_color">{variationsList}</ul>
                    </article>

                    {/* <a
                        className="product_btn"
                        href={`https://api.whatsapp.com/send/?phone=573142467055&text=Me+gustar%C3%ADa+comprar+el+producto+${item.name}+con+referencia+${code},+el+color+que+elegí+es+el+${selectedColor}+y+la+talla+es+${selectedSize}.+Gracias.&type=phone_number&app_absent=0`}
                    >
                        Comprar
                    </a> */}

                    <a className="product_btn" href={``}>
                        Ver producto
                    </a>
                </article>
            </article>
        </article>
    );
};

// Validation props
StoreProduct.propTypes = {
    item: PropTypes.object.isRequired,
};

// Export component
export default StoreProduct;
