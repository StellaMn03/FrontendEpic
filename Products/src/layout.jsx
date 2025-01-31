import { NavLink, Outlet } from "react-router-dom";

export const Layout = () => (
  <div className="layout">
    <nav className="navbar">
      <div className="navbar-container">
        <NavLink to="/products">Products</NavLink>
        <NavLink to="/basket">Basket</NavLink>
        <NavLink to="/product/add">Add Product</NavLink>
      </div>
    </nav>
    <main className="content">
      <Outlet />
    </main>
  </div>
);
