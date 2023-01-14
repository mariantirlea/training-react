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

            <div className="row">
                {categories.map((category, index)=> <HomeCategory key={category.id} name={category.name} image={category.image} description={category.description} category={categoryKeys[index]}/>)}
            </div>

        </div>
        
    </Layout>
}

export default Home;