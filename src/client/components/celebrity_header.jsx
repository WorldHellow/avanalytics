import React, { Component } from "react";
import FilterDropdown from "./celebrity/filter_dropdown";
import "semantic-ui-css/semantic.min.css";

class CelebrityHeader extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="col-xs-12">
          <h2 className="heading-bar celebrity-heading">Celebrities</h2>
        </div>
        <div className="col-xs-12 celebrity-filters">
          <button className="celebrity-filters-button">6 hours</button>
          <button className="celebrity-filters-button">24 hours</button>
          <button className="celebrity-filters-button">Last Week</button>
        </div>
      </React.Fragment>
    );
  }
}

export default CelebrityHeader;
