import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { term: "" };

    this.onInputChange = this.onInputChange.bind(this);
  }

  onInputChange(event) {
    this.setState({ term: event.target.value });
    this.props.onSearchTermChange(event.target.value);
  }

  render() {
    return (
      <div className="search-bar">
        <input
          placeholder={`Search a youtube video here...`}
          value={this.state.term}
          onChange={this.onInputChange}
        />
        <FontAwesomeIcon icon={faSearch} />
      </div>
    );
  }
}

export default SearchBar;
