// Dependencies
import { useState, useEffect } from "react";

//* --- | Components | --- *//
// General
import LoadingPage from "../containers/LoadingPage.jsx";
import Header from "../containers/Header.jsx";
import Footer from "../containers/Footer.jsx";

// Content
import StoreStart from "../components/StoreStart.jsx";
import StoreProducts from "../components/StoreProducts.jsx";

//* --- | Styles | --- *//
import "../styles/pages/store.scss";
import EncryptData from "../utils/encryptData.js";

//* --- | Principal Component | --- *//
const Store = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        (async () => {
            try {
                const res = await fetch(`${import.meta.env.VITE_API_URL}/products`);
                const products = await res.json();
                const decryptedProducts = await EncryptData.decryptJSON(products.data);
                setProducts(decryptedProducts);
            } catch (error) {
                console.log(error.message);
            }
        })();
    }, []);

    return (
        <>
            <LoadingPage />
            <Header />
            <main className="page_store">
                {/* <StoreStart title="CATEGORIAS" products={products} /> */}
                <StoreProducts products={products} />
            </main>
            <Footer />
        </>
    );
};

// Export component
export default Store;
