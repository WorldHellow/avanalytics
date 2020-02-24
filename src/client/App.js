import React, { Component } from "react";
import SearchBar from "./components/search_bar";
import YTSearch from "youtube-api-search";
import VideoList from "./components/video_list";
import VideoDetail from "./components/video_detail";
import "font-awesome/css/font-awesome.min.css";
import "./assets/navbar/css/style.css";
const API_KEY = "AIzaSyCv_zrb2-k07aL9tzITMd1B0QMejoGOt7Ul";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null,
      navbarActive: "active"
    };

    this.videoSearch("BBC Urdu");
  }

  handleSidebarCollapse = () => {
    if (this.state.navbarActive === "active") {
      this.setState({ navbarActive: "" });
    } else {
      this.setState({ navbarActive: "active" });
    }
  };

  videoSearch(searchTerm) {
    YTSearch({ key: API_KEY, term: searchTerm }, data => {
      this.setState({
        videos: data,
        selectedVideo: data[0]
      });
    });
  }
  render() {
    return (
      <div>
        <div className="wrapper d-flex align-items-stretch">
          <nav id="sidebar" className={this.state.navbarActive}>
            <h1>
              <a href="index.html" className="logo">
                T.
              </a>
            </h1>
            <ul className="list-unstyled components mb-5">
              <li className="active">
                <a href="#">
                  <span className="fa fa-home"></span> Home
                </a>
              </li>
              <li>
                <a href="#">
                  <span className="fa fa-sticky-note"></span> History
                </a>
              </li>
              <li>
                <a href="#">
                  <span className="fa fa-cogs"></span> Analytics
                </a>
              </li>
              <li>
                <a href="#">
                  <span className="fa fa-user"></span> About
                </a>
              </li>
            </ul>

            <div className="footer">
              <p>
                Copyright &copy;
                <script>document.write(new Date().getFullYear());</script> All
                rights reserved | TUKL-NUST
              </p>
            </div>
          </nav>

          <div id="content" className="p-3 p-md-4">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
              <div className="container-fluid">
                <button
                  type="button"
                  id="sidebarCollapse"
                  className="btn btn-primary"
                  onClick={this.handleSidebarCollapse}
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
                  onSearchTermChange={searchTerm =>
                    this.videoSearch(searchTerm)
                  }
                />
              </div>
            </nav>

            <div className="container-fluid">
              <VideoDetail video={this.state.selectedVideo} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
