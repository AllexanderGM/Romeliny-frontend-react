// Dependencies
import { useEffect, useRef } from "react";
import Spinner from "react-bootstrap/Spinner";

// Principal component
const LoadingPage = () => {
    // Refernecia del elemento html
    const loadingPageRef = useRef(null);

    // Siclo de vida del componente
    useEffect(() => {
        const element = loadingPageRef.current;
        element.id = "load_page";
        element.addEventListener("animationend", () => {
            element.className = "loading_page off";
        });
    }, []);

    return (
        <section className="loading_page" id="" ref={loadingPageRef}>
            <Spinner animation="grow" variant="light" />
            <span className="loading_text">Cargando</span>
        </section>
    );
};

// Export component
export default LoadingPage;
