import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import { asset } from "../../../assets/asset";

const Navbar = () => {
  return (
    <div className="navbar navbar-bg">
      <p className="logo">POKÉMON</p>
      <ul className="navbar-menu">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            HOME
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/pokedex"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            POKÉDEX
          </NavLink>
        </li>
      </ul>
      <div className="logo logo--right">
        <img src={asset.logo} alt="site logo" />
      </div>
    </div>
  );
};

export default Navbar;
