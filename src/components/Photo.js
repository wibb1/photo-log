import React, { Component } from "react";
import PropTypes from "prop-types";

class Photo extends Component {
  render() {
    return (
      <figure className="figure">
        <img className="photo" src={this.props.post.imageLink} alt={this.props.post.description} />
        <figcaption>
          <p>{this.props.post.description}</p>
        </figcaption>
        <div className="button-container">
          <button
            className="remove-button"
            onClick={() => this.props.removePost(this.props.index)}
          >
            Remove
          </button>
        </div>
      </figure>
    );
  }
}

Photo.propTypes = {
  post: PropTypes.object.isRequired,
};

export default Photo;
