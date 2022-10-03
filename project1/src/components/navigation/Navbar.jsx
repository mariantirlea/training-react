import { Component } from "react";
import styles from "./Navbar.module.css";

class Navbar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isUsersPageActive: true,
      isPostsPageActive: false,
    };
  }

  changeStateAndInform(e, newState) {
    e.stopPropagation();
    e.preventDefault();

    this.setState(newState);
    this.props.onNavBarChange(newState);
  }

  render() {
    return (
      <>
        <nav
          className={
            "navbar navbar-expand-md sticky-top navbar-dark bg-dark " +
            styles.navbar
          }
        >
          <div className="container-fluid">
            <a className="navbar-brand" href="/">
              Proiect 1
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
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a
                    className={
                      "nav-link " +
                      (this.state.isUsersPageActive ? "active " : "")
                    }
                    href="#"
                    onClick={(e) =>
                      this.changeStateAndInform(e, {
                        isUsersPageActive: true,
                        isPostsPageActive: false,
                      })
                    }
                  >
                    <i className="bi bi-people"></i> Utilizatori
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className={
                      "nav-link " +
                      (this.state.isPostsPageActive ? "active " : "")
                    }
                    href="#"
                    onClick={(e) =>
                      this.changeStateAndInform(e, {
                        isUsersPageActive: false,
                        isPostsPageActive: true,
                      })
                    }
                  >
                    <i className="bi bi-card-heading"></i> Postări
                  </a>
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
      </>
    );
  }
}

export default Navbar;
