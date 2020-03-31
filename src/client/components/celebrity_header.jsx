import React, { Component } from "react";
import "semantic-ui-css/semantic.min.css";

class CelebrityHeader extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="col-xs-12">
          <h2 className="heading-bar celebrity-heading">Celebrities</h2>
        </div>
      </React.Fragment>
    );
  }
}

export default CelebrityHeader;
