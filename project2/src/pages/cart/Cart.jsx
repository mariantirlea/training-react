import Layout from "../../components/Layout";
import {connect} from 'react-redux';
import { Link } from "react-router-dom";
import { removeFromCartById } from "../../redux/actions/product.actions";

function Cart({total, currency, products, removeFromCartById}){
    return <Layout>
        <div className="container">
    
        <h2 className="mb-3"><span className="" style={{borderBottom: '1px solid #0d6efd'}}>Coș de cumpărături</span></h2>

        {products.length === 0 && <div>
            <div className="col-sm-12 empty-cart-cls text-center">
                <i className="bi bi-cart3 text-primary" style={{fontSize: '5rem'}}></i>

                <h3><strong>Coșul dumeavoastră de cumpărături este gol</strong></h3>
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
                            <th scope="col"></th>
                            </tr>
                        </thead>
                        <tbody>
                        {products.map((p, index) => {
                            return  <tr key={index}>
                                <td className="align-middle"><img className="me-2" src={p.product.image} width="50" alt="" />{p.product.name}</td>
                                <td className="align-middle">{p.product.price} {p.product.currency}</td>
                                <td className="align-middle">{p.quantity}</td>
                                <td className="align-middle">{p.product.price * p.quantity} {p.product.currency}</td>
                                <td className="align-middle"><button type="button" className="btn btn-outline-danger" onClick={() => removeFromCartById(p.product.id)}><i className="bi bi-trash3"></i></button></td>
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
    
    store.products.cartProducts.forEach(product => {
        total += product.product.price * product.quantity;
    })

    const currency = store.products.cartProducts.length !== 0 ? store.products.cartProducts[0].product.currency : '';


    return {total, currency, 
        products: store.products.cartProducts
    }
}

function dispatchToProps(dispatch){
    return {
        removeFromCartById: (id) => dispatch(removeFromCartById(id))
    }
}

export default connect(mapStateToProps, dispatchToProps)(Cart);