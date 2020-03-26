import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import socketIOClient from "socket.io-client";
import YTSearch from "youtube-api-search";
import VideoList from "./components/video_list";
import Navbar from "./components/navbar";
import Sidebar from "./components/sidebar";
import VideoDetail from "./components/video_detail";
import NotFound from "./components/not-found";
import "font-awesome/css/font-awesome.min.css";
import "./assets/navbar/css/style.css";
const API_KEY = "AIzaSyCv_zrb2-k07aL9tzITMd1B0QMejoGOt7Ul";

class App extends Component {
  state = {
    videos: [],
    selectedVideo: null,
    navbarActive: "active",
    response: false,
    endpoint: "http://localhost:8909"
  };

  componentDidMount() {
    this.handleVideoSearch("BBC Urdu");

    const { endpoint } = this.state;
    const socket = socketIOClient(endpoint);
    socket.on("FacialRecognitionData", data => {
      this.setState({ response: data });
      console.log(data);
    });
    socket.on("SpeechRecognitionData", data => {
      this.setState({ response: data });
      console.log(data);
    });
    socket.on("TickerRecognitionData", data => {
      this.setState({ response: data });
      console.log(data);
    });
  }

  handleSidebarCollapse = () => {
    this.state.navbarActive === "active"
      ? this.setState({ navbarActive: "" })
      : this.setState({ navbarActive: "active" });
  };

  handleVideoSearch = searchTerm => {
    YTSearch({ key: API_KEY, term: searchTerm }, data => {
      this.setState({
        videos: data,
        selectedVideo: data[0]
      });
    });
  };
  render() {
    const { navbarActive } = this.state;
    return (
      <React.Fragment>
        <div className="wrapper d-flex align-items-stretch">
          <Sidebar navbarActive={navbarActive}></Sidebar>

          <div id="content" className="p-3 p-md-4">
            <Navbar
              onVideoSearch={this.handleVideoSearch}
              onSidebarCollapse={this.handleSidebarCollapse}
            ></Navbar>
            <div className="container-fluid">
              <Switch>
                <Route path="/not-found" component={NotFound}></Route>
                <Route
                  path="/"
                  exact
                  render={props => (
                    <VideoDetail {...props} video={this.state.selectedVideo} />
                  )}
                ></Route>
                <Redirect to="/not-found"></Redirect>
              </Switch>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
