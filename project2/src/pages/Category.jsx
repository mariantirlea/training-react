
import Layout from "../components/Layout";
import ProductItem from "../components/ProductItem";
import products from "../utils/products.json";

function Category(props){

    const categoryName = props.match.params.categoryName;
    const data = products[categoryName];


    return <Layout>
        <style>{`

       
        .owl-item img {
            display: block;
            width: 100%;
        }

        .hero-carousel__slide {
            position: relative;
        }

        .hero-carousel__slide:hover::after {
            transform: translateY(0);
            opacity: 1;
        }

        .hero-carousel__slide:hover .hero-carousel__slideOverlay {
            transform: translateY(0);
            opacity: 1;
            z-index: 2;
        }

        .hero-carousel__slideOverlay {
          background: rgba(255,255,255,0.5);
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          padding: 30px 5px;
          transform: translateY(30px);
          opacity: 0;
          z-index: -1;
          transition: all .48s ease;
          text-align: center;
        }

        .owl-item {
            overflow: hidden;
        }

        .hero-carousel__slideOverlay h3 {
            font-size: 20px;
            font-weight: 400;
            color: #fff;
        }

        .hero-carousel__slideOverlay p {
            color: #fff;
            margin: 0;
        }

        .hero-carousel__slide:hover a {
            text-decoration: none;
        }

        `}</style>

      <div className="container">
        <div className="row gx-2">
        {data ? data.items.map(item => <ProductItem key={item.id} category = {categoryName} product={item}></ProductItem>) : <h1>No products</h1> }
        </div>
      </div>
    </Layout>

}

export default Category;