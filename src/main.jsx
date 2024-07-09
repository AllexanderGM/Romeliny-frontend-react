// Dependences
import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import App from "./routes/App.jsx";

// Context
import GlobalContext from "./context/GlobalContext.jsx";

// Resources
import EncryptData from "./utils/encryptData.js";
import vars from "./_data/vars.json";

// Styles
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/global.scss";

// Embedding in DOOM HTML
ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <ContextcomponentGlobal />
    </React.StrictMode>
);

function ContextcomponentGlobal() {
    const [context, setContext] = useState(vars);
    const [backend, setBackend] = useState({ status: "loading" });
    const [meliCode, setMeliCode] = useState("");

    useEffect(() => {
        // Verifica la conexión con el backend
        (async () => {
            try {
                const response = await fetch(`${import.meta.env.VITE_API_URL}/`);
                const data = await response.json();
                setBackend(data);
                console.log("Status backend:", data);
            } catch (error) {
                console.error("Error al verificar el servidor:", error);
            }
        })();

        /* // Verifica si hay un código de MercadoLibre
        const urlParams = new URLSearchParams(window.location.search);
        const code = urlParams.get("code");
        console.log(code);
        if (code) setMeliCode(code); */
    }, []);

    return (
        <GlobalContext.Provider value={{ context, setContext }}>
            <App />
        </GlobalContext.Provider>
    );
}
