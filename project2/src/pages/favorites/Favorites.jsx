import Layout from "../../components/Layout";
import {connect} from 'react-redux';
import css from './Favorites.module.css';
import { Link } from "react-router-dom";
import { removeFromFavoritesById } from "../../redux/favorites/FavoritesActions";

function Favorites({products, removeFromFavoritesById}){

    return <Layout>
        <div className="container">

            <h2 className="mb-3"><span className="" style={{borderBottom: '1px solid #0d6efd'}}>Produse favorite</span></h2>

            {products.length === 0 && <div>
                <div className="col-sm-12 empty-cart-cls text-center">
                    <i className="bi bi-heart text-danger" style={{fontSize: '5rem'}}></i>

                    <h3><strong>Lista dumeavoastră de produse favorite este goala</strong></h3>
                    <h4>Hai să schimbăm asta <i className="bi bi-emoji-wink"></i></h4>
                    <Link to="/" className="btn btn-outline-primary btn-outline cart-btn-transform m-3" data-abc="true">spre cumpărături</Link>

                </div>    
            </div>}

            {products.length !==0 && <div className="table-responsive-xxl">
                    <table className="table table-hover">
                        <thead>
                            <tr>
                            <th scope="col">Produs</th>
                            <th scope="col">Preț</th>
                            <th scope="col"></th>
                            </tr>
                        </thead>
                        <tbody>
                        {products.map((p, index) => {
                            return  <tr key={index}>
                                <td className="align-middle"><img className="me-2" src={p.product.image} width="50" alt="" />{p.product.name}</td>
                                <td className="align-middle">{p.product.price} {p.product.currency}</td>
                                <td className="align-middle"><button type="button" className="btn btn-outline-danger" onClick={() => removeFromFavoritesById(p.product.id)}><i className="bi bi-trash3"></i></button></td>
                            </tr>
                        })}
                    
                        </tbody>
                    </table>

                </div>
            }
        

        </div>
    </Layout>
}

function mapStateToProps(store){

    return {
        products: store.favorites.products
    }
}

function dispatchToProps(dispatch){
    return {
        removeFromFavoritesById: (id) => dispatch(removeFromFavoritesById(id))
    }
}

export default connect(mapStateToProps, dispatchToProps)(Favorites);