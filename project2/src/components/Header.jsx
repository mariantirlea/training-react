import React from "react";
import css from './Header.module.css';
import { Link } from "react-router-dom";
import Logo from '../assets/images/logo-no-background.png';
import Cart from "./CartIcon";
import { login, logout } from "../redux/actions/user.actions";
import { connect } from "react-redux";
import FavIcon from "./favicon/FavIcon";

function Header({user, signInGoogle, signInFacebook, signOut}){
    
    return (
      <>
        <nav style={{backgroundColor: 'white', boxShadow: 'rgb(0 35 71 / 15%) 0px 10px 27px 3px'}}
          className={
            "navbar sticky-top navbar-expand-lg navbar-light"
          }


        >
          <div className="container">
            <Link className="navbar-brand" to="/">
              <img
                src={Logo}
                width="175"
                className="d-inline-block align-text-top"
              />
            </Link>

            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <i className="bi bi-list"></i>
            </button>

            <div className="collapse navbar-collapse" id="navbarNav">
              <div className="me-auto">
              </div>
             
              <FavIcon />

              <Cart />

              <ul className="navbar-nav mb-2 mb-lg-0">
                <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        {user ? user.displayName : 'Cont personal'}
                    </a>
                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">                        
                        {!user && <li><button className="dropdown-item" onClick={() => signInGoogle()}><i className="bi bi-google"></i>&nbsp;&nbsp;Continuă cu Google</button></li>}
                        {!user && <li><button className="dropdown-item" href="#" onClick={() => signInFacebook()}><i className="bi bi-facebook"></i>&nbsp;&nbsp;Continuă cu Facebook</button></li>}

                        {user && <li><button className="dropdown-item" href="#" onClick={() => signOut()}>Ieșire</button></li>}
                    </ul>
                </li>
              </ul>

           
            </div>
          </div>
        </nav>
      </>
    );

    
}

function mapPropsToState(state){
    return {
        user: state.userState.user
    }
}

function mapDispatchToProps(dispatch){
    return {
        signInGoogle: () => dispatch(login(false)),
        signInFacebook: () => dispatch(login(true)),
        signOut: () => dispatch(logout())
    }
}

export default connect(mapPropsToState, mapDispatchToProps)(Header);