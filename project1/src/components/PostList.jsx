import { Component } from "react";


class PostList extends Component {

    constructor(){
        super();
        
        this.state = {
            posts: [],
            loadingPosts: false
        }
    }

    componentDidMount() {

        this.setState({loadingPosts: true});

        fetch('https://jsonplaceholder.typicode.com/posts')
        .then((res) => res.json())
        .then((data) => this.setState({posts: data.map((current, index) => {
          return {
            id: current.id,
            userId: current.userId,
            title: current.title,
            body: current.body
          }
        })}))
        .catch((err) => console.error(err))
        .finally(() => this.setState({loadingPosts: false}));

    }

    render(){
        return <>
            <h3>Lista postari</h3>

            {this.state.loadingPosts && <p>Va rugam asteptati...</p>}

            {!this.state.loadingPosts && this.state.posts.map((current) => {
                return <div key={current.id} className="card mb-2">
                    <div className="card-body">
                        <h5 className="card-title">{current.title}</h5>
                        <p className="card-text">{current.body}</p>
                    </div>
                </div>
            })}
            
        </>
    }

}

export default PostList;