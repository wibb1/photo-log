import React, { Component } from "react";
import Photo from "./Photo";
import Comments from "./Comments";

class Single extends Component {
  render() {
    const { match, posts } = this.props;
    const id = Number(match.params.id);
    const post = posts.find((npost) => npost.id === id);
    const comments = this.props.comments[match.params.id] || [];
    const index = this.props.posts.findIndex((ipost) => ipost.id === id);
    if (this.props.loading === true) {
      return <div className="loader">...loading</div>;
    } else if (post) {
      return (
        <div className="single-photo">
          <Photo post={post} {...this.props} index={index}></Photo>
          <Comments
            startAddingComments={this.props.startAddingComments}
            comments={comments}
            id={id}
          ></Comments>
        </div>
      );
    } else {
      return <h1> ... no posts found </h1>;
    }
  }
}

export default Single;
