import Layout from "../../components/Layout";
import {connect} from 'react-redux';
import css from './Favorites.module.css';
import { Link } from "react-router-dom";

function Favorites({total, currency, products}){

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
                            <th scope="col">Cantitate</th>
                            <th scope="col">Total</th>
                            </tr>
                        </thead>
                        <tbody>
                        {products.map((p, index) => {
                            return  <tr key={index}>
                                <td>{p.product.name}</td>
                                <td>{p.product.price} {p.product.currency}</td>
                                <td>{p.quantity}</td>
                                <td>{p.product.price * p.quantity} {p.product.currency}</td>
                            </tr>
                        })}
                    
                        </tbody>
                    </table>

                    <h3 className="text-end">Total <span>{total} {currency}</span></h3>
                </div>
            }
        

        </div>
    </Layout>
}

function mapStateToProps(store){

    let total = 0;
    
    store.favorites.products.forEach(product => {
        total += product.product.price * product.quantity;
    })

    const currency = store.favorites.products.length !== 0 ? store.favorites.products[0].product.currency : '';

    return {
        total, currency,
        products: store.favorites.products
    }
}

export default connect(mapStateToProps)(Favorites);