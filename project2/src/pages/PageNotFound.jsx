import React from "react";
import { Link } from "react-router-dom";

function PageNotFound(){
    return <div style={{minHeight: '100%', marginTop: '10%'}} className="text-white pb-3 text-center flex-column d-flex justify-content-center align-items-center">
    <h1 className="display-1 fw-bold">404</h1>
    <p className="fs-3"> <span className="text-danger">Ups!</span> Pagină negasită.</p>
    <p className="lead">Pagina pe care o căutați nu există.</p>

    <Link
        to="/"
        className="btn btn-light">
        Pagina principală
    </Link>

</div>
}

export default PageNotFound;