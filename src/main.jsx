// Dependences
import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import App from "./routes/App.jsx";

// Context
import GlobalContext from "./context/GlobalContext.jsx";

// Resources
import variables from "./_data/vars.json";

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
    // Crea un estado
    const [context, setContext] = useState(variables);

    return (
        <GlobalContext.Provider value={{ context, setContext }}>
            <App />
        </GlobalContext.Provider>
    );
}
