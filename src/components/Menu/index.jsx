import React from "react";
import { Route, Link } from "react-router-dom";

const menus = [
  {
    name: "Home",
    to: "/",
    exact: true
  },
  {
    name: "Manager products",
    to: "/products-list",
    exact: false
  }
];

const MenuLink = ({ label, to, activeOnlyWhenExact }) => (
  <Route
    path={to}
    exact={activeOnlyWhenExact}
    children={({ match }) => {
      let active = match ? "active" : "";
      return (
          <Link to={to} className={`nav-item nav-link ${active}`} >{label}</Link>
      );
    }}
  />
);

const ShowMenus = (menus) => {
  let result =
    menus.length === 0
      ? null
      : menus.map((menu, key) => (
          <MenuLink
            key={key}
            label={menu.name}
            to={menu.to}
            activeOnlyWhenExact={menu.exact}
          />
        ));
    return result;
};

const Menu = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="navbar-brand">CALL API</div>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse">
        <nav className="nav nav-pills flex-column flex-sm-row">{ShowMenus(menus)}</nav>
      </div>
    </nav>
  );
};

export default Menu;
