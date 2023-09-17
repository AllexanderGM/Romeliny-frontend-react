//* Dependencies *//
import { Suspense, lazy } from "react";
const Plot = lazy(() => import("react-plotly.js"));

import Spinner from "react-bootstrap/Spinner";

const DashboardGraphic = ({ title, dailyVisits }) => {
    return (
        <section className="dashboard_graphic">
            <Suspense fallback={<Spinner animation="border" />}>
                <Plot
                    data={[
                        {
                            x: ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado", "Domingo"],
                            y: dailyVisits,
                            type: "linear",
                        },
                    ]}
                    layout={{ title: title }}
                />
            </Suspense>
        </section>
    );
};

export default DashboardGraphic;
