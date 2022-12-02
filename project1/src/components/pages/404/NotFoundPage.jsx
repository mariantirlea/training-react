import { NavLink } from "react-router-dom";

function NotFoundPage(){
    return (
        <div style={{minHeight: '100%'}} className="pb-3 text-center flex-column d-flex justify-content-center align-items-center">
            <h1 className="display-1 fw-bold">404</h1>
            <p className="fs-3"> <span className="text-danger">Ups!</span> Pagină negasită.</p>
            <p className="lead">Pagina pe care o căutați nu există.</p>

            <NavLink
                to="/"
                className="btn btn-outline-dark">
                Pagina principală
            </NavLink>

        </div>
    )
}

export default NotFoundPage;