import React from "react";

const StatisticsHeader = ({ dataList }) => {
    const targetList = dataList.map((item, index) => {
        return (
            <article key={index} className="statistics_header-panel_admin">
                <div className="statistics_header-panel_admin-header">
                    <h3>{item.title}</h3>
                    <ion-icon name={item.icon}></ion-icon>
                </div>

                <span className="statistics_header-panel_admin-body">{item.number}</span>

                <div className="statistics_header-panel_admin-footer">
                    <ion-icon name={item.icon_stats}></ion-icon>
                    <span>{item.procent}</span>
                    <p>Ultimo mes</p>
                </div>
            </article>
        );
    });

    return <section className="statistics_header">{targetList}</section>;
};

export default StatisticsHeader;
