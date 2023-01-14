
import Layout from "../components/Layout";
import ProductItem from "../components/ProductItem";
import products from "../utils/products.json";

function Category(props){

    const categoryName = props.match.params.categoryName;
    const data = products[categoryName];


    return <Layout>
      <div className="row">
      {data ? data.items.map(item => <ProductItem key={item.id} category = {categoryName} product={item}></ProductItem>) : <h1>No products</h1> }
      </div>
    </Layout>

}

export default Category;