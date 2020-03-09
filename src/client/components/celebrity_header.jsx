import React, { Component } from "react";
import { Dropdown } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";

class CelebrityHeader extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="col-xs-8 col-xs-offset-2">
          <h2 className="heading-bar celebrity-heading">Celebrities</h2>
        </div>
        <div className="col-xs-2">
          <Dropdown
            button
            pointing="right"
            className="icon celebrity-dropdown"
            icon="setting"
          >
            <Dropdown.Menu>
              <Dropdown.Item text="Last 24 hours" />
              <Dropdown.Item text="Last Week" />
              <Dropdown.Item text="Last Month" />
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </React.Fragment>
    );
  }
}

export default CelebrityHeader;
