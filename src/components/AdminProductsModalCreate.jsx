// Dependencies
import { useContext } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

// Components
// Components bootstrap
import Modal from "react-bootstrap/Modal";

// Context
import GlobalContext from "../context/GlobalContext.jsx";

// Component principal
const AdminProductsModalCreate = ({ create, createHandleClose }) => {
    // data optenida del contexto global
    const { context } = useContext(GlobalContext);
    const routes = context.routes;

    return (
        <Modal className="createModal" show={create} onHide={createHandleClose} backdrop="static" keyboard={false}>
            <Modal.Header>
                <h3 className="login_title">Agregar Producto</h3>

                <button className="login_close" onClick={() => createHandleClose(false)}>
                    <ion-icon name="close-circle-outline"></ion-icon>
                </button>
            </Modal.Header>

            <Modal.Body>
                <form className="login_form create_product" id="form-Post">
                    <label htmlFor="foto" class="fotoForm__Productos">
                        <input type="file" name="foto" required accept="image/*" />
                        <figure class="iborrainputfile"></figure>
                        <span>
                            <ion-icon name="cloud-upload-outline"></ion-icon>Subir archivo
                        </span>
                    </label>

                    <label htmlFor="nombre">
                        <input type="text" name="nombre" placeholder=" Nombre" required />
                    </label>

                    <label htmlFor="categoria">
                        <select className="item__categoria" name="categoria" placeholder=" Selecciona una categoria" required>
                            <option value="Casual">Casual</option>
                            <option value="Formal">Formal</option>
                            <option value="Deportivo">Deportivo</option>
                        </select>
                    </label>

                    <label htmlFor="descripcion">
                        <input type="text" name="descripcion" placeholder=" Descripción" required />
                    </label>

                    <label htmlFor="codigo">
                        <input type="text" name="codigo" placeholder=" Referencia" required />
                    </label>

                    <label htmlFor="precio">
                        <input type="number" name="precio" placeholder=" Precio" required />
                    </label>

                    <label htmlFor="stock">
                        <input type="number" name="stock" placeholder=" stock" required />
                    </label>
                    <button id="tarjeta__btn-postProduct" type="submit">
                        Agregar
                    </button>
                </form>
            </Modal.Body>
        </Modal>
    );
};

// Validation props
AdminProductsModalCreate.propTypes = {
    create: PropTypes.bool.isRequired,
    createHandleClose: PropTypes.func.isRequired,
};

// Export component
export default AdminProductsModalCreate;
