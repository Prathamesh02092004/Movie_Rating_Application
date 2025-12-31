import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png";

const Navbar = () => {
  return (
    <nav
      className="navbar navbar-expand-sm"
      style={{ backgroundColor: "#f0e6d7" }}
    >
      <div className="container">
        <img
          src={logo}
          alt="Movie Blog Logo"
          className="img-fluid me-2"
          style={{ height: "80px" }}
        />
        
        <NavLink
          className="navbar-brand"
          to="/"
          style={{ color: "#885133", fontWeight: "bold" }}
        >
          MOVIE-BLOG
        </NavLink>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapsibleNavId"
          aria-controls="collapsibleNavId"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="collapsibleNavId">
          <ul className="navbar-nav me-auto mt-2 mt-lg-0">
            <li className="nav-item">
              <NavLink
                to="/"
                className="nav-link"
                style={{ color: "#885133" }}
              >
                Home
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                to="/add"
                className="nav-link"
                style={{ color: "#885133" }}
              >
                Add
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
