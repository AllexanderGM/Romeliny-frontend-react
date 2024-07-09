// Dependencies
import PropTypes from "prop-types";

// Principal component
const StoreProductContainer = ({ url, category, item, color }) => {
    const discountPrice = item.price - item.price * 0.1;

    const product = {
        name: item.name,
        code: category,
        color: color.length > 0 ? color : null,
        price: discountPrice.toLocaleString("es-CO", {
            style: "currency",
            currency: "COP",
        }),
    };

    // Filtrar atributos nulos del objeto product
    const filteredProduct = Object.fromEntries(Object.entries(product).filter(([key, value]) => value !== null));

    const message =
        `Hola 👋, vengo desde el sitio web, quiero comprar el sigueinte producto:%0A%0A` +
        `Nombre: ${filteredProduct.name}%0A` +
        `Referencia: ${filteredProduct.code}%0A` +
        (filteredProduct.color ? `Color: ${filteredProduct.color}%0A` : "") +
        `Precio: ${filteredProduct.price}%0A` +
        `URL: ${url} %0A%0A` +
        `Quiero poder coordinar la compra y entrega del producto. Gracias 😊`;

    const phoneNumber = "573224198413";
    const whatsappUrl = `https://api.whatsapp.com/send/?phone=${phoneNumber}&text=${message}&type=phone_number&app_absent=0`;

    return (
        <div className="product_container_category">
            <div className="product_category">
                <p>{category}</p>
            </div>

            <a className="product_cart" href={whatsappUrl} target="_blank">
                <ion-icon name="bag-check"></ion-icon>
            </a>
        </div>
    );
};

// Validation props
StoreProductContainer.propTypes = {
    category: PropTypes.string.isRequired,
    item: PropTypes.object.isRequired,
};

// Export component
export default StoreProductContainer;
