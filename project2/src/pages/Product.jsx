import Layout from "../components/Layout";
import products from '../utils/products.json';
import {connect} from 'react-redux';
import { addToCart } from "../redux/actions/product.actions";
import { addToFavorites } from "../redux/favorites/FavoritesActions";

function Product(props){
    const productId = props.match.params.productId;
    const category = props.match.params.categoryName;

    const items = products[category];

    const product = items.items.find(p => p.id === +productId);

    return <Layout>
        {product.name}
        <button onClick={() => props.addItemToCart(product)}>Add to cart</button>
    </Layout>
}

function dispatchToProps(dispatch){
    return {
        addItemToCart: (product) => dispatch(addToCart(product)),
        addToFavorites: (product) => dispatch(addToFavorites(product))
    }
}

export default connect(null, dispatchToProps)(Product);