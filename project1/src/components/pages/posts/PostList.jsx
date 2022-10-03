import { Component } from "react";
import PostItem from "./PostItem";
import PostItemPlaceholder from "./PostItemPlaceholder";

class PostList extends Component {
  constructor() {
    super();

    this.state = {
      posts: [],
      loadingPosts: false,
      placeholderSizes: []
    };
  }

  generatePlaceholderPosts() {
    const count = Math.floor(Math.random() * 10) + 1;
    const placeholderSizes = [...Array(count).keys()].map(() =>
      [...Array(5).keys()].map(() => Math.floor(Math.random() * 10) + 3)
    );

    this.setState({ placeholderSizes });
  }

  componentDidMount() {
    this.generatePlaceholderPosts();

    this.setState({ loadingPosts: true });

    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) =>
        this.setState({
          posts: data.map((current) => {
            return {
              id: current.id,
              userId: current.userId,
              title: this.capitalizeFirst(current.title),
              body: this.capitalizeFirst(current.body),
            };
          }),
        })
      )
      .catch((err) => console.error(err))
      .finally(() => setTimeout(() => this.setState({ loadingPosts: false }), this.props.settings.isDemo ? 3000 : 0));
  }

  capitalizeFirst(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  render() {
    return (
      <div className="container mb-1">
        <div className="row">
          {this.state.loadingPosts &&
            this.state.placeholderSizes.map((current, index) => {
              return <PostItemPlaceholder key={index} sizes={current} />;
            })}

          {!this.state.loadingPosts &&
            this.state.posts.map((current) => {
              return (
                <PostItem
                  key={current.id}
                  title={current.title}
                  body={current.body}
                />
              );
            })}

          {!this.state.loadingPosts && this.state.posts.length === 0 && (
            <h4>Nu există nimic de afișat!</h4>
          )}
        </div>
      </div>
    );
  }
}

export default PostList;
