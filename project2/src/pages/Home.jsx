import React from "react";
import HomeCategory from "../components/HomeCategory";
import Layout from "../components/Layout";

import products from "../utils/products.json";
import {signInWithPopup} from 'firebase/auth';

function Home(props){

    const categoryKeys = Object.keys(products);
    const categories = Object.values(products);

    return <Layout signInWithPopup={signInWithPopup}>
        
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