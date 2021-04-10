import React, { Component } from "react";
import Photo from "./Photo-hooks";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
class Photowall extends Component {
  render() {
    return (
      <div>
        <Link className="add-icon" to="/AddPhoto"></Link>
        <div className="photo-grid">
          {this.props.posts
            .sort(function (x, y) {
              return y.id - x.id;
            })
            .map((post) => (
              <Photo
                key={post.id}
                post={post}
                onRemovePhoto={this.props.onRemovePhoto}
              />
            ))}
        </div>
      </div>
    );
  }
}
Photowall.propTypes = {
  posts: PropTypes.array.isRequired,
  onRemovePhoto: PropTypes.func.isRequired,
};

export default Photowall;
