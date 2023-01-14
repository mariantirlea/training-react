import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { addToCart } from "../redux/actions/product.actions";

function ProductItem({category, product, addItemToCart}){

    // console.log(product);
    return <div className="col-12 col-lg-4 mb-3" style={{textAlign: 'center'}}>
        {/* <img src={product.image} alt="" className="w-100"></img>
        <h3 className="text-center">{product.name}</h3>
        <h4 className="text-center">{product.price} {product.currency}</h4>

        <div className="d-flex justify-content-center align-items-center">
            <Link to={`/products/${category}/${product.id}`}>
                <button className="btn btn-link">Adauga in cos</button>
            </Link>
        </div> */}
        <div style={{border: '1px solid #e9e9e9'}}>
            <div className="owl-item active mb-3">
                <div className="hero-carousel__slide">
                    <img src={product.image} alt="" className="img-fluid"/>
                    <div className="hero-carousel__slideOverlay">
                
                    <button className="btn btn-outline btn-primary me-3"><i className="bi bi-heart text-light" style={{fontSize: '1.5rem'}}></i></button>
                    <button className="btn btn-outline btn-primary" onClick={() => addItemToCart(product)}><i className="bi bi-cart3 text-light" style={{fontSize: '1.5rem'}}></i></button>

                    </div>


                </div>

            </div>

            <p className="mb-1">{product.brand}</p>
            <h4 className="card-product__title">
                <a className="" style={{textDecoration: 'none'}} href={`/products/${category}/${product.id}`}>{product.name}</a>
            </h4>

            <p className="fw-light card-product__price">{product.price} {product.currency}</p>
        </div>
    </div>

}

function dispatchToProps(dispatch){
    return {
        addItemToCart: (product) => dispatch(addToCart(product))
    }
}

export default connect(null, dispatchToProps)(ProductItem);
