import React, { Component } from "react";
import SearchBar from "./search_bar";

class Navbar extends Component {
  render() {
    const { onSidebarCollapse, onVideoSearch } = this.props;
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <button
            type="button"
            id="sidebarCollapse"
            className="btn btn-primary"
            onClick={onSidebarCollapse}
          >
            <i className="fa fa-bars"></i>
            <span className="sr-only">Toggle Menu</span>
          </button>
          <div className="main-title">
            <label>
              AUDIO & VIDEO
              <span className="font-weight-bold"> ANALYTICS</span>
            </label>
          </div>
          <SearchBar
            onSearchTermChange={searchTerm => onVideoSearch(searchTerm)}
          />
        </div>
      </nav>
    );
  }
}

export default Navbar;
