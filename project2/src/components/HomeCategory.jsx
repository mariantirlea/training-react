import { Link } from "react-router-dom";

function HomeCategory({name, description, image, category}){
    return <div className="col-12 col-lg-4 mb-3">
        {/* <Link to={`/category/${category}`}> */}
            {/* <img src={image} className="customWidth100"></img>
            <h1>{name}</h1>
            <p>{description}</p> */}

            <div className="owl-item active">
                <div className="hero-carousel__slide">
                    <img src={image} alt="" className="img-fluid"/>
                    <a href={`/category/${category}`} className="hero-carousel__slideOverlay bg-primary">
                        <h3>{name}</h3>
                        <p>{description}</p>
                    </a>
                </div>
            </div>

        {/* </Link> */}
    </div>
}



export default HomeCategory;