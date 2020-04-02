import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import socketIOClient from "socket.io-client";
import Navbar from "./components/navbar";
import Sidebar from "./components/sidebar";
import VideoDetail from "./components/video_detail";
import NotFound from "./components/not-found";
import { getVideos } from "./services/videoService";
import "font-awesome/css/font-awesome.min.css";
import "./assets/navbar/css/style.css";
import "react-toastify/dist/ReactToastify.css";
const YOUTUBE_API_KEY = "AIzaSyCv_zrb2-k07aL9tzITMd1B0QMejoGOt7U";

class App extends Component {
  state = {
    videos: [],
    selectedVideo: null,
    navbarActive: "active",
    response: false,
    endpoint: "http://localhost:8909"
  };

  async componentDidMount() {
    this.handleVideoSearch("");

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

  handleVideoSearch = async searchTerm => {
    const { data } = await getVideos();
    const allVideos = data.videos;
    let filteredVideos = allVideos;

    if (searchTerm) {
      filteredVideos = allVideos.filter(
        video =>
          video.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          video.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    this.setState({
      videos: filteredVideos,
      selectedVideo: filteredVideos[0]
    });
  };

  setSelectedVideo = video => {
    const selectedVideo = { ...video };
    this.setState({
      selectedVideo
    });
  };

  render() {
    const { navbarActive, selectedVideo, videos } = this.state;
    return (
      <React.Fragment>
        <ToastContainer></ToastContainer>

        <div className="wrapper d-flex align-items-stretch">
          <Sidebar navbarActive={navbarActive}></Sidebar>

          <div id="content" className="p-3 p-md-4">
            <Navbar
              videos={videos}
              onVideoSearch={this.handleVideoSearch}
              onSidebarCollapse={this.handleSidebarCollapse}
              onListItemClick={this.setSelectedVideo}
            ></Navbar>
            <div className="container-fluid">
              <Switch>
                <Route path="/not-found" component={NotFound}></Route>
                <Route
                  path="/"
                  exact
                  render={props => (
                    <VideoDetail {...props} video={selectedVideo} />
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
