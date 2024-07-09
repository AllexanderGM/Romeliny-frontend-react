// Dependencies
import { useState, useEffect, useContext } from "react";

import "../../styles/pages/admin/products.scss";

//* Components *//
// General
import LoadingPage from "../../containers/LoadingPage.jsx";

import AsideLeftDashboard from "../../containers/AsideLeftDashboard.jsx";
import AdminProductsModalCreate from "../../components/AdminProductsModalCreate.jsx";

// Content
import StoreStart from "../../components/StoreStart.jsx";
import AdminStoreProducts from "../../components/AdminStoreProducts.jsx";
import GlobalContext from "../../context/GlobalContext.jsx";

const Products = () => {
    const { context, setContext } = useContext(GlobalContext);
    const url_api = context.url_api;

    const [products, setProducts] = useState([]);
    const [create, setCreate] = useState(false);

    const createHandleClose = () => setCreate(false);
    const createHandleShow = () => setCreate(true);

    const createProduct = () => {};

    useEffect(() => {
        (async () => {
            try {
                const res = await fetch(`${url_api}/products`);
                const products = await res.json();
                setProducts(products);
            } catch (error) {
                console.log(error.message);
            }
        })();
    }, []);

    return (
        <>
            <LoadingPage />
            <AsideLeftDashboard />
            <main className="page_store admin">
                <StoreStart title="CATEGORIAS" products={products} />
                <AdminStoreProducts products={products} />

                <button className="create" onClick={createHandleShow}>
                    <ion-icon name="add-circle"></ion-icon>
                </button>

                <AdminProductsModalCreate create={create} createHandleClose={createHandleClose} />
            </main>
        </>
    );
};

export default Products;
