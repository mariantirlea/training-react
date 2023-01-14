import React from "react";
import css from './Footer.module.css';
import { Link } from "react-router-dom";

function Footer(){
    return <div className={"pt-5 pb-3 " + css['footer-container']} style={{boxShadow: 'rgb(0 35 71 / 15%) 0px -10px 27px 3px'}}>
        <Link to="/about" className="text-white">Despre</Link>
        <Link to="/terms" className="text-white ms-3">Termeni și condiții</Link>

        <br/><br/>
        <p className="text-light mt-2 mb-0 d-block">Marian Tîrlea. &copy; 2023, Toate drepturile rezervate.</p>

    </div>
}

export default Footer;