//* Components *//
// General
import LoadingPage from "../../containers/LoadingPage.jsx";

import Logo from "../../components/atoms/Logo.jsx";
import StatisticsHeader from "../../components/StatisticsHeader.jsx";
import AsideRigthDashboard from "../../containers/AsideRigthDashboard.jsx";
import AsideLeftDashboard from "../../containers/AsideLeftDashboard.jsx";
import DashboardGraphic from "../../components/DashboardGraphic.jsx";
import DashboardTable from "../../components/DashboardTable.jsx";

//* Styles *//
import "../../styles/pages/admin/dashboard.scss";

const Dashboard = () => {
    return (
        <>
            <LoadingPage />
            <AsideLeftDashboard />
            <AsideRigthDashboard />

            <main className="dashboard">
                <Logo />
                <StatisticsHeader
                    dataList={[
                        { title: "Ingresos al sitio", icon: "earth", number: "34", icon_stats: "trending-up", procent: "10%" },
                        { title: "Uso del chat", icon: "chatbubbles", number: "100", icon_stats: "trending-up", procent: "10%" },
                    ]}
                />

                <DashboardGraphic title="Visitas en los dias de la semana" dailyVisits={[125, 50, 120, 200, 170, 260, 210]} />

                <DashboardTable />
            </main>
        </>
    );
};

export default Dashboard;
