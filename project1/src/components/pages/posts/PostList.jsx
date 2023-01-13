import { Component } from "react";
import PostItem from "./PostItem";
import PostItemPlaceholder from "./PostItemPlaceholder";
import {connect} from "react-redux";
import { fetchPosts } from "../../../redux/actions/posts.actions";

class PostList extends Component {
  constructor(props) {
    super(props);

    this.state = {
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

    this.props.fetchPosts();

  }

  render() {
    return (
      <div className="container mb-1">
        <div className="row">
          {this.props.isLoading &&
            this.state.placeholderSizes.map((current, index) => {
              return <PostItemPlaceholder key={index} sizes={current} />;
            })}

          {!this.props.isLoading &&
            this.props.posts.map((current) => {
              return (
                <PostItem
                  key={current.id}
                  title={current.title}
                  body={current.body}
                />
              );
            })}

          {!this.props.isLoading && this.props.posts.length === 0 && (
            <h4>Nu există nimic de afișat!</h4>
          )}
        </div>
      </div>
    );
  }
}

function mapStateToProps(store){

  return {
    isDemo: store.settings.isDemo,
    posts: store.postsInfo.posts,
    isLoading: store.spinner.isLoading
  }
}

function mapDispatchToProps(dispatch){
  return {
    fetchPosts: () => dispatch(fetchPosts())
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(PostList);