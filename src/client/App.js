import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import Navbar from "./components/NavBar/navbar";
import Sidebar from "./components/sidebar";
import VideoDetail from "./components/video_detail";
import NotFound from "./components/not-found";
import { getVideos } from "./services/videoService";
import socket from "./components/socketContext";
import "font-awesome/css/font-awesome.min.css";
import "./assets/navbar/css/style.css";
import "react-toastify/dist/ReactToastify.css";

class App extends Component {
  state = {
    videos: [],
    selectedVideo: null,
    navbarActive: "active",
  };

  componentDidMount() {
    this.populateVideos();
    window.addEventListener("beforeunload", this.componentCleanup);
  }

  componentWillUnmount() {
    this.componentCleanup();
    window.removeEventListener("beforeunload", this.componentCleanup);
  }

  componentCleanup() {
    socket.emit("VideoStopTrigger");
    toast.warn("Audio Video Analytics processing stopped!", {
      position: toast.POSITION.BOTTOM_RIGHT,
    });
    socket.close();
  }

  handleSidebarCollapse = () => {
    this.state.navbarActive === "active"
      ? this.setState({ navbarActive: "" })
      : this.setState({ navbarActive: "active" });
  };

  populateVideos = async () => {
    const { data } = await getVideos();
    const allVideos = data.videos;
    this.setState({
      videos: allVideos,
      filteredVideos: allVideos,
      selectedVideo: allVideos[0],
    });
  };

  handleVideoSearch = (searchTerm) => {
    const videos = [...this.state.videos];
    let filteredVideos = videos;

    if (searchTerm) {
      filteredVideos = videos.filter(
        (video) =>
          video.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          video.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    this.setState({ filteredVideos });
  };

  setSelectedVideo = (video) => {
    if (this.state.selectedVideo.videoId === video.videoId) return;
    const selectedVideo = { ...video };
    socket.emit("VideoStopTrigger");
    toast.warn("Audio Video Analytics processing stopped!", {
      position: toast.POSITION.BOTTOM_RIGHT,
    });

    this.setState({
      selectedVideo,
    });
  };

  render() {
    const { navbarActive, selectedVideo, filteredVideos } = this.state;
    return (
      <React.Fragment>
        <ToastContainer></ToastContainer>

        <div className="wrapper d-flex align-items-stretch">
          <Sidebar navbarActive={navbarActive}></Sidebar>

          <div id="content" className="p-3 p-md-4">
            <Navbar
              videos={filteredVideos}
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
                  render={(props) => (
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
