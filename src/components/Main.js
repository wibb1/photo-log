import React, { Component } from "react";
import { Route, Link } from "react-router-dom";
import Photowall from "./PhotoWall";
import AddPhoto from "./AddPhoto";

class Main extends Component {
  constructor() {
    super();
  }

  render() {
    console.log(this.props);
    return (
      <div>
        <h1><Link to='/'>Photowall</Link></h1>
        <Route
          exact
          path="/"
          render={() => (
            <div>
              <Photowall {...this.props} />
            </div>
          )}
        />
        {
          <Route
            path="/AddPhoto"
            render={() => (
              <AddPhoto {...this.props} />
            )}
          />
        }
      </div>
    );
  }
}
//, history.push('/')
export default Main;
