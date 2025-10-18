import React, { useState } from "react";
import "./Navbar.css";
import { asset } from "../../../assets/asset";

const Navbar = () => {
  const [navbar, setNavbar] = useState("home");
  const [query, setQuery] = useState("");

  return (
    <div className="navbar navbar-bg">
      <p className="logo">GALLERY IMAGE</p>
      <ul className="navbar-menu">
        <li
          onClick={() => setNavbar("home")}
          className={navbar === "home" ? "active" : ""}
        >
          Home
        </li>
        <li
          onClick={() => setNavbar("pokemon")}
          className={navbar === "pokemon" ? "active" : ""}
        >
          Pokemon
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
            <img src={asset.search} className="icon-search" alt="" />
            {/* 🔍 */}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Navbar;
