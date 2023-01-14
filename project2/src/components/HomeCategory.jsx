import { Link } from "react-router-dom";

function HomeCategory({name, description, image, category}){
    return <div className="col-6 mb-3">
        <Link to={`/category/${category}`}>
            <img src={image} className="customWidth100"></img>
            <h1>{name}</h1>
            <p>{description}</p>
        </Link>
    </div>
}

export default HomeCategory;