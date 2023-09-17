import React from "react";

const DashboardAsideProduct = ({ img, nombre, precio }) => {
    return (
        <div className="Panel__Aside__Producto">
            <figure>
                <img src={img} alt="" />
            </figure>
            <div>
                <h4>{nombre}</h4> <span>{precio}</span>
            </div>
        </div>
    );
};

export default DashboardAsideProduct;
