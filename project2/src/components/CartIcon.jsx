import {connect} from 'react-redux';
import { Link } from "react-router-dom";

function CartIcon({cartItemsNumber}){
    return <>
        <Link to="/cart" className='position-relative me-3 me-lg-5 d-inline-block'>
            <i className="bi bi-cart3 text-secondary" style={{fontSize: '1.5rem'}}></i>

            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-primary">
                {cartItemsNumber}
            </span>
        </Link>
    </>
}

function mapStateToProps(store){
    let total = 0;
    store.products.cartProducts.forEach(p => total += p.quantity);

    return {
        cartItemsNumber: total
    }
}

export default connect(mapStateToProps)(CartIcon);