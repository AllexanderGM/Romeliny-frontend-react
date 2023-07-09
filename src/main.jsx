// Dependences
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./routes/App.jsx";

// Styles
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/global.scss";

// Embedding in DOOM HTML
ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
