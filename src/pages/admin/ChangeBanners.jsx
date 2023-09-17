//* Components *//
// General
import LoadingPage from "../../containers/LoadingPage.jsx";

import Logo from "../../components/atoms/Logo.jsx";
import StatisticsHeader from "../../components/StatisticsHeader.jsx";
import AsideRigthDashboard from "../../containers/AsideRigthDashboard.jsx";
import AsideLeftDashboard from "../../containers/AsideLeftDashboard.jsx";
import DashboardGraphic from "../../components/DashboardGraphic.jsx";
import DashboardTable from "../../components/DashboardTable.jsx";

const ChangeBanners = () => {
    return (
        <>
            <LoadingPage />
            <AsideRigthDashboard />
            <AsideLeftDashboard />
            <main>ChangeBanners</main>
        </>
    );
};

export default ChangeBanners;
