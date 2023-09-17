import React from "react";

const DashboardTable = () => {
    return (
        <section className="table-responsive dashboard_table">
            <h3>Ultimos usuarios que compraron</h3>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Nombre</th>
                        <th scope="col">Correo</th>
                        <th scope="col">Telefono</th>
                        <th scope="col">ID Compra</th>
                        <th scope="col">Valor</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>Mark</td>
                        <td>Mark@gmail.com</td>
                        <td>322 020 20 30</td>
                        <td>fd0123ds</td>
                        <td>$ 320.000</td>
                    </tr>
                    <tr>
                        <th scope="row">2</th>
                        <td>Jacob</td>
                        <td>Jacob@gmail.com</td>
                        <td>300 102 62 31</td>
                        <td>frs453ds</td>
                        <td>$ 85.000</td>
                    </tr>
                    <tr>
                        <th scope="row">3</th>
                        <td>Larry</td>
                        <td>Larry@gmail.com</td>
                        <td>312 047 25 79</td>
                        <td>lohh5621</td>
                        <td>$ 160.000</td>
                    </tr>
                    <tr>
                        <th scope="row">3</th>
                        <td>Larry</td>
                        <td>Larry@gmail.com</td>
                        <td>312 047 25 79</td>
                        <td>lohh5621</td>
                        <td>$ 160.000</td>
                    </tr>
                    <tr>
                        <th scope="row">3</th>
                        <td>Larry</td>
                        <td>Larry@gmail.com</td>
                        <td>312 047 25 79</td>
                        <td>lohh5621</td>
                        <td>$ 160.000</td>
                    </tr>
                </tbody>
            </table>
        </section>
    );
};

export default DashboardTable;
