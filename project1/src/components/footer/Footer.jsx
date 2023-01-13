import { NavLink } from "react-router-dom";

function Footer(){

    return (
        <footer className="footer mt-auto py-3 bg-dark">

        <div className="text-center">
         
            <NavLink
                to="/about"
                className="link-light">
                Descriere
            </NavLink>

            <p className="text-light mt-2 mb-0">Marian Tîrlea. &copy; 2023, Toate drepturile rezervate.</p>


        </div>

      </footer>
    );
 
}

export default Footer;
