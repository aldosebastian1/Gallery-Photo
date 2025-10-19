import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import { asset } from "../../../assets/asset";

const Navbar = () => {
  const [query, setQuery] = useState("");

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
      <div className="navbar-right">
        <form
          className="search-bar compact"
          onSubmit={(e) => {
            e.preventDefault();
            console.log("Search query:", query);
          }}
        >
          <input
            type="text"
            className="search-input"
            placeholder="Search..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            aria-label="Search images"
          />
          <button
            type="submit"
            className="search-btn"
            aria-label="Submit search"
          >
            <img src={asset.search} className="icon-search" alt="search" />
          </button>
        </form>
      </div>
    </div>
  );
};

export default Navbar;
