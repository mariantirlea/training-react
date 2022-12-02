import styles from "./Navbar.module.css";
import { NavLink } from "react-router-dom";

function Navbar(){

    return (
        <nav
          className={
            "navbar navbar-expand-md sticky-top navbar-dark bg-dark " +
            styles.navbar
          }
        >
          <div className="container-fluid">

            <NavLink
                to="/"
                className="navbar-brand">
                Proiect 1
            </NavLink>

            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">

                  <NavLink
                      to="/users"
                      className={({ isActive }) => "nav-link " + (isActive ? "active" : "")}>
                      <i className="bi bi-people"></i> Utilizatori
                  </NavLink>

                </li>
                <li className="nav-item">

                  <NavLink
                      to="/posts"
                      className={({ isActive }) => "nav-link " + (isActive ? "active" : "")}>
                      <i className="bi bi-card-heading"></i> Postări
                  </NavLink>

                </li>

              </ul>
              <div className="d-flex">

                <button
                  className="btn btn-outline-light"
                  data-bs-toggle="offcanvas"
                  data-bs-target="#offcanvasRight"
                  aria-controls="offcanvasRight"
                >
                  <i className="bi bi-gear"></i> Setări
                </button>
           
              </div>
            </div>
          </div>
        </nav>
    );
 
}

export default Navbar;
