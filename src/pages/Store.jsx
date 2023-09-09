// Dependencies
import { useState, useEffect, useContext } from "react";

//* --- | Components | --- *//
// General
import LoadingPage from "../containers/LoadingPage.jsx";
import Header from "../containers/Header.jsx";
import Footer from "../containers/Footer.jsx";

// Content
import StoreStart from "../components/StoreStart.jsx";
import StoreProducts from "../components/StoreProducts.jsx";
import GlobalContext from "../context/GlobalContext.jsx";

//* --- | Styles | --- *//
import "../styles/pages/store.scss";

//* --- | Principal Component | --- *//
const Store = () => {
    const { context, setContext } = useContext(GlobalContext);
    const url_api = context.url_api;

    const [products, setProducts] = useState([]);
    const [banners, setBanners] = useState([]);

    useEffect(() => {
        (async () => {
            try {
                const res = await fetch(`${url_api}/products`);
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
                <StoreStart title="CATEGORIAS" bannersList={banners} products={products}/>
                <StoreProducts products={products} />
            </main>
            <Footer />
        </>
    );
};

// Export component
export default Store;
