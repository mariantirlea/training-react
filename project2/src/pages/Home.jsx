import React from "react";
import HomeCategory from "../components/HomeCategory";
import Layout from "../components/Layout";
import HomePic from "../assets/images/pexels-angela-roma-7319306.jpg"
import products from "../utils/products.json";

function Home(props){

    const categoryKeys = Object.keys(products);
    const categories = Object.values(products);

    return <Layout>

        <section className="hero-banner mb-5">
            <div className="container">
            <div className="row no-gutters align-items-center" style={{paddingTop: '60px'}}>
            <div className="col-5 d-none d-sm-block">
            <div className="hero-banner__img">
            <img className="img-fluid" src={HomePic} alt=""/>
            </div>
            </div>
            <div className="col-sm-7 col-lg-6 offset-lg-1 ps-4 ps-md-5 ps-lg-0">
            <div className="hero-banner__content">
            <h4 className="fs-3">Cumpărăturile sunt distractive</h4>
            <h1 className="fs-1 fw-bolder text-uppercase">Alegeți dintre produsele noastre de top</h1>
            <p className="fw-light text-dark">Toate produsele noastre provin de la producători cu experiență în domeniu. Calitatea este tot ce conteaza!</p>
            </div>
            </div>
            </div>
            </div>
        </section>

        <div className="container">
            <style>{`

            .hero-carousel__slide::after{
           
                content: "";
                display: block;
                position: absolute;
                bottom: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: rgba(255,255,255,0.8);
                transform: translateY(50px);
                opacity: 0;
                transition: all .4s ease;
                     
            }
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
                position: absolute;
                bottom: 10px;
                padding: 23px 90px 23px 25px;
                transform: translateY(50px);
                opacity: 0;
                z-index: -1;
                transition: all .4s ease-in-out;
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

            <div className="row">
                {categories.map((category, index)=> <HomeCategory key={category.id} name={category.name} image={category.image} description={category.description} category={categoryKeys[index]}/>)}
            </div>

        </div>
        
    </Layout>
}

export default Home;