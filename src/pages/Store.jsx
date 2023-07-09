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

//* --- | Principal Component | --- *//
const Store = () => {
    const [products, setProducts] = useState([]);
    const [banners, setBanners] = useState([]);

    useEffect(() => {
        (async () => {
            try {
                const res = await fetch("./data/products.json");
                const products = await res.json();
                setProducts(products);
            } catch (error) {
                console.log(error.message);
            }

            try {
                const res = await fetch("./data/banners.json");
                const banners = await res.json();
                setBanners(banners);
            } catch (error) {
                console.log(error.message);
            }
        })();
    }, []);

    return (
        <>
            <LoadingPage />
            <Header />
            <main>
                <StoreStart title="CATEGORIAS" bannersList={banners} />
                <StoreProducts products={products} />
            </main>
            <Footer />
        </>
    );
};

// Export component
export default Store;
