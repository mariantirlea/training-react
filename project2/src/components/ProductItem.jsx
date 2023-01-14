import { Link } from "react-router-dom";

function ProductItem({category, product}){

    // console.log(product);
    return <div className="col-4">
        <img src={product.image} alt="" className="w-100"></img>
        <h3 className="text-center">{product.name}</h3>
        <h4 className="text-center">{product.price} {product.currency}</h4>

        <div className="d-flex justify-content-center align-items-center">
            <Link to={`/products/${category}/${product.id}`}>
                <button className="btn btn-link">Adauga in cos</button>
            </Link>
        </div>
    </div>

}

export default ProductItem;