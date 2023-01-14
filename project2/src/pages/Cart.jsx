import Layout from "../components/Layout";
import {connect} from 'react-redux';

function Cart({products}){
    return <Layout>
        <div className="container">
    
        {products.map(p => {
            return <div className="row">
                <div className="col-6">
                    {p.product.name}
                </div>
                <div className="col-2">
                    {p.product.price} {p.product.currency}
                </div>
                <div className="col-4">
                    {p.quantity}
                </div>
            </div>
        })}


        </div>
    </Layout>
}

function mapStateToProps(store){

    return {
        products: store.products.cartProducts
    }
}

export default connect(mapStateToProps)(Cart);