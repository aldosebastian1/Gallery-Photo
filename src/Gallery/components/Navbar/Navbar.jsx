import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar navbar-bg">
      <p className="logo">GALLERY IMAGE</p>
      <ul className="navbar-menu">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/pokedex"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Pokemon
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
