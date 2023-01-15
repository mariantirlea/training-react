import {connect} from 'react-redux';
import { Link } from "react-router-dom";
import css from './FavIcon.module.css';

function FavIcon({total}){
    return <Link to="/favorites" className='position-relative me-3 me-lg-3 d-inline-block'>
            <i id={css['favicon']} className="bi bi-heart text-secondary"/>

            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                {total}
            </span>
    </Link>
}

function mapStateToProps(store){
    return {total: store.favorites.products.length}
}

export default connect(mapStateToProps)(FavIcon);