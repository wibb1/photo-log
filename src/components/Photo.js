import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

class Photo extends Component {
  render() {
    const props = this.props;
    const post = this.props.post;
    return (
      <figure className="figure">
        <Link to={`/single/${post.id}`}>
          <img className="photo" src={post.imageLink} alt={post.description} />
        </Link>
        <figcaption>
          <p>{post.description}</p>
        </figcaption>
        <div className="button-container">
          <button
            className="remove-button"
            onClick={() => {
              props.startRemovingPost(props.index, post.id);
              props.history.push("/");
            }}
          >
            Remove
          </button>
          <Link className="button" to={`/single/${post.id}`}>
            <div className="comment-count">
              <div className="speech-bubble"></div>
              {props.comments[post.id] ? props.comments[post.id].length : 0}
            </div>
          </Link>
        </div>
      </figure>
    );
  }
}

Photo.propTypes = {
  post: PropTypes.object.isRequired,
};

export default Photo;
