import Layout from "../components/Layout";
import products from '../utils/products.json';
import {connect} from 'react-redux';
import { addToCart } from "../redux/actions/product.actions";
import { addToFavorites } from "../redux/favorites/FavoritesActions";
import { Link } from "react-router-dom";

function Product(props){
    const productId = props.match.params.productId;
    const category = props.match.params.categoryName;

    const items = products[category];

    const product = items.items.find(p => p.id === +productId);

    return <Layout>
        <div className="container">
            <div className="row">
                <div className="col-12 col-lg-4">
                    <img src={product.image} style={{maxHeight: '500px'}} alt="" className="img-fluid"/>

                </div>

                <div className="col-12 col-lg-8">
                    <h4 className="fw-bold card-product__title">
                        {product.name}
                    </h4>

                    <p className="fw-light fs-2 card-product__price">{product.price} {product.currency}</p>  
                    <p className="fw-light card-product__price">{product.description}</p>  

                    <ul className="list p-0" style={{listStyleType: 'none'}}>
                        <li><span>Brand</span> : {product.brand}</li>
                        <li><span>Mărime</span> : {product.size}</li>
                        <li><span>Culoare</span> : {product.colour}</li>
                        <li><span>Material</span> : {product.material}</li>
                    </ul>



                    <button className="btn btn-outline btn-danger me-3" onClick={() => props.addToFavorites(product)}><i className="bi bi-heart text-light" style={{fontSize: '1.5rem'}}></i></button>
                    <button className="btn btn-outline btn-primary" onClick={() => props.addItemToCart(product)}><i className="bi bi-cart3 text-light" style={{fontSize: '1.5rem'}}></i> Adaugă în coș</button>

                </div>
            </div>
        </div>

    </Layout>
}

function dispatchToProps(dispatch){
    return {
        addItemToCart: (product) => dispatch(addToCart(product)),
        addToFavorites: (product) => dispatch(addToFavorites(product))
    }
}

export default connect(null, dispatchToProps)(Product);