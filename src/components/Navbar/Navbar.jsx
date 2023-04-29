import React from "react";
import CartWidget from "../CartWidget/CartWidget";
import "./Navbar.css";
import Header from "../Header/Header";
import { NavLink, Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <Header />
      <nav className="navbar navbar-expand-lg bg-secondary">
        <div className="container-fluid ">
          <a className="navbar-brand " href="#">
            <Link to={"/"}>
              <img
                className="logoNike ms-2"
                src="../img/logoNike.png"
                alt="logo Nike"
              />
            </Link>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse " id="navbarNav">
            <ul className="navbar-nav ms-auto me-auto">
              <li className="nav-item text-center fs-5 bg-li nav-link">
                <NavLink className="nav" to={`/categoria/1`}>
                  Calzado
                </NavLink>
              </li>
              <li className="nav-item text-center fs-5 bg-li nav-link">
                <NavLink className="nav" to={`/categoria/2`}>
                  Ropa
                </NavLink>
              </li>
              <li className="nav-item text-center fs-5 bg-li nav-link">
                <NavLink className="nav" to={`/categoria/3`}>
                  Accesorios
                </NavLink>
              </li>
            </ul>
            <CartWidget />
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
