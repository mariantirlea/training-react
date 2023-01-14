import React from "react";
import css from './Header.module.css';
import { Link } from "react-router-dom";
import Logo from '../assets/images/logo.png';
import Cart from "./CartIcon";
import { login, logout } from "../redux/actions/user.actions";
import { connect } from "react-redux";

function Header({user, signInGoogle, signInFacebook, signOut}){
    
    return (
        <div className="border-bottom p-3 mb-5">

        <div className="container-fluid d-flex justify-content-between align-items-center">
            <Link to="/"><img src={Logo} className={css["logo"]}/></Link>
            {user && user.displayName}

            <div className={css['actions-wrapper'] + " d-flex justify-content-between"}>
                <Link to="/" className="">Home</Link>
                <Link to="/about" className="">About</Link>
        
                {/* {this.state.loading && 'Loading...'} */}

                {user ?
                    <button className="btn btn-link" onClick={() => signOut()}>
                        Sign out
                    </button>
                    :
                    <div>
                        <button className="btn btn-link" onClick={() => signInGoogle()}>
                            Sign in with Google
                        </button>
                        <button className="btn btn-link" onClick={() => signInFacebook()}>
                            Sign in with Facebook
                        </button>
                    </div>

                    
                }
            </div>
            <Cart/>

            </div>
            
        </div>
    )

    
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