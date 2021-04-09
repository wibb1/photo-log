import React, { Component } from "react";
import Photo from "./Photo";

class Photowall extends Component {
  
  render() {
    
    return (
      <div className="photo-grid">
        {this.props.posts.map((post, index, onRemovePhoto) => (
          <Photo
            key={index}
            post={post}
            onRemovePhoto={this.props.onRemovePhoto}
          />
        ))}
      </div>
    );
  }
}

export default Photowall;
