import CartIconSrc from '../assets/icons/shopping-cart.svg';
import {connect} from 'react-redux';
import { Link } from "react-router-dom";

function CartIcon({cartItemsNumber}){
    return <>
        <Link to="/cart">
            <img src={CartIconSrc} alt="Shopping cart"></img>
            <p>{cartItemsNumber}</p>
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