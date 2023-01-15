import { Link } from "react-router-dom";

function HomeCategory({name, description, image, category}){
    return <div className="col-12 col-lg-4 mb-3">
      
        <div className="owl-item active">
            <div className="hero-carousel__slide">
                <img src={image} alt="" className="img-fluid"/>
                <Link to={`/category/${category}`} className="hero-carousel__slideOverlay bg-primary">
                    <h3>{name}</h3>
                    <p>{description}</p>
                </Link>
            </div>
        </div>

    </div>
}



export default HomeCategory;