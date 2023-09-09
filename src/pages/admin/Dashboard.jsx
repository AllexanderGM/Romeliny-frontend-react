//* Components *//
// General
import LoadingPage from "../../containers/LoadingPage.jsx";
import Header from "../../containers/Header.jsx";
import Footer from "../../containers/Footer.jsx";

const Dashboard = () => {
    return (
        <>
            <LoadingPage />
            <Header />
            <main> Dashboard</main>
            <Footer />
        </>
    );
};

export default Dashboard;
