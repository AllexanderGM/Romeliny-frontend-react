// Dependencies
import { BrowserRouter, Routes, Route } from "react-router-dom";

// * --- | Pages | --- * //
// General
import NotFount from "../pages/NotFound.jsx";
import Home from "../pages/Home.jsx";
import Contact from "../pages/Contact.jsx";
import Register from "../pages/Register.jsx";
import Store from "../pages/Store.jsx";
import About from "../pages/About.jsx";

// User
import User from "../pages/user/User.jsx";
import FullRegister from "../pages/user/FullRegister.jsx";
import Cart from "../pages/user/Cart.jsx";

//Admin
import Dashboard from "../pages/admin/Dashboard.jsx";
import Products from "../pages/admin/Products.jsx";
import Users from "../pages/admin/Users.jsx";
import Carts from "../pages/admin/Carts.jsx";
import UpdateData from "../pages/admin/UpdateData.jsx";
import MassiveMail from "../pages/admin/MassiveMail.jsx";
import ChangeBanners from "../pages/admin/ChangeBanners.jsx";

// Context
import GlobalContext from "../context/GlobalContext.jsx";

// Resources
import variables from "../_data/vars.json";
const UserAuth = false;
const AdminAuth = false;

// Principal component
function App() {
    return (
        <GlobalContext.Provider value={variables}>
            <BrowserRouter>
                <Routes>
                    {/* General */}
                    <Route exact path="/" element={<Home />} />
                    <Route exact path="/store" element={<Store />} />
                    <Route exact path="/contact" element={<Contact />} />
                    <Route exact path="/about" element={<About />} />
                    <Route exact path="/register" element={<Register />} />
                    <Route path="*" element={<NotFount />} />

                    {/* User */}
                    <Route exact path="/user" element={UserAuth ? <User /> : <Home />} />
                    <Route exact path="/fullregister" element={UserAuth ? <FullRegister /> : <Home />} />
                    <Route exact path="/cart" element={UserAuth ? <Cart /> : <Home />} />

                    {/* Admin */}
                    <Route exact path="/dashboard" element={AdminAuth ? <Dashboard /> : <Home />} />
                    <Route exact path="/products" element={AdminAuth ? <Products /> : <Home />} />
                    <Route exact path="/users" element={AdminAuth ? <Users /> : <Home />} />
                    <Route exact path="/carts" element={AdminAuth ? <Carts /> : <Home />} />
                    <Route exact path="/updatedata" element={AdminAuth ? <UpdateData /> : <Home />} />
                    <Route exact path="/massivemail" element={AdminAuth ? <MassiveMail /> : <Home />} />
                    <Route exact path="/changebanners" element={AdminAuth ? <ChangeBanners /> : <Home />} />
                </Routes>
            </BrowserRouter>
        </GlobalContext.Provider>
    );
}

// Export component
export default App;
