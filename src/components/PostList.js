import React from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions'

class PostList extends React.Component {
  componentDidMount() {
    this.props.fetchPosts();
  }
  renderList() {
    return this.props.posts.map(post => {
      return (
        <div className="item" key="post.id">
          <img className="avatar" alt=""></img>
          <div className="content">
            <div className="description">
              <h3>{post.title}</h3>
              <p>{post.body}</p>
            </div>
          </div>
        </div>

      );
    });
  }

  render() {
    console.log(this.props.posts);
    return (
      <div>
        <ul className="list-group">{this.renderList()}</ul>
      </div>
      //<div className="">PostList</div>
    );
  }
}

const mapStateToProps = (state) => {
  return { posts: state.posts }
}

export default connect(mapStateToProps, {fetchPosts: fetchPosts})(PostList);