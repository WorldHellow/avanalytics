import React, { Component } from "react";
import SearchBar from "./search_bar";
import SearchBarList from "./search_bar_list";

class Navbar extends Component {
  state = { focus: false };

  handleSearchFocus = () => {
    this.setState({ focus: true });
  };

  handleSearchBlur = () => {
    this.setState({ focus: false });
  };

  handleListItemClick = item => {
    this.props.onListItemClick(item);
    this.setState({ focus: false });
  };

  render() {
    const { onSidebarCollapse, onVideoSearch, videos } = this.props;
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
            onFocus={this.handleSearchFocus}
            onBlur={this.handleSearchBlur}
          />
          {this.state.focus ? (
            <SearchBarList
              videos={videos}
              onListItemClick={this.handleListItemClick}
              onBlur={this.handleSearchBlur}
            />
          ) : null}
        </div>
      </nav>
    );
  }
}

export default Navbar;
