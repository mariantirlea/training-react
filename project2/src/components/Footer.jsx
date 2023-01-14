import React from "react";
import css from './Footer.module.css';
import { Link } from "react-router-dom";

function Footer(){
    return <div className={css['footer-container']}>
        <Link to="/" className={css['link-buttons']}>Home</Link>
        <Link to="/about" className={css['link-buttons']}>About</Link>
        <Link to="/login" className={css['link-buttons']}>Login</Link>
    </div>
}

export default Footer;