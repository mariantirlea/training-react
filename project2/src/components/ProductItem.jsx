import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { addToCart } from "../redux/actions/product.actions";
import { addToFavorites, removeFromFavoritesById } from "../redux/favorites/FavoritesActions";

function ProductItem({isFav, category, product, addItemToCart, addToFavorites, removeFromFavoritesById}){

    return <div className="col-12 col-lg-4 mb-3" style={{textAlign: 'center'}}>

        <div style={{border: '1px solid #e9e9e9'}}>
            <div className="owl-item active mb-3">
                <div className="hero-carousel__slide">
                    <img src={product.image} alt="" className="img-fluid"/>
                    <div className="hero-carousel__slideOverlay">
                
                        {isFav ? <button className="btn btn-outline btn-danger me-3" onClick={() => removeFromFavoritesById(product.id)}><i className="bi bi-heart-fill text-light" style={{fontSize: '1.5rem'}}></i></button> : 
                        <button className="btn btn-secondary me-3" onClick={() => addToFavorites(product)}><i className="bi bi-heart text-light" style={{fontSize: '1.5rem'}}></i></button>
                                            }
                        <button className="btn btn-outline btn-primary" onClick={() => addItemToCart(product)}><i className="bi bi-cart3 text-light" style={{fontSize: '1.5rem'}}></i></button>

                    </div>


                </div>

            </div>

            <p className="mb-1">{product.brand}</p>
            <h4 className="card-product__title">
                <Link className="" style={{textDecoration: 'none'}} to={`/products/${category}/${product.id}`}>{product.name}</Link>
            </h4>

            <p className="fw-light card-product__price">{product.price} {product.currency}</p>
        </div>
    </div>

}

function dispatchToProps(dispatch){
    return {
        addItemToCart: (product) => dispatch(addToCart(product)),
        addToFavorites: (product) => dispatch(addToFavorites(product)),
        removeFromFavoritesById: (product) => dispatch(removeFromFavoritesById(product))
    }
}

export default connect(null, dispatchToProps)(ProductItem);
