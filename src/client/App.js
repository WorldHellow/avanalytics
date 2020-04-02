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

  handleVideoSearch = searchTerm => {
    const allVideos = [
      {
        videoId: 1,
        publishedAt: "2017-09-09T23:38:21.000Z",
        title:
          "Sairbeen 26 Mar 2020 - Coronavirus toll rises in USA. The latest from Sindh. & WorkingFromHome tips",
        description: "BBC URDU TV PROGRAMME SAIRBEEN",
        thumbnails: {
          default: {
            url: "https://i.ytimg.com/vi/vXrqQ-MduZQ/sddefault.jpg"
          },
          medium: {},
          high: {}
        },
        url: "https://www.youtube.com/embed/vXrqQ-MduZQ"
      },
      {
        videoId: 2,
        publishedAt: "2017-09-09T23:38:21.000Z",
        title:
          "Sairbeen 30 Mar 2020 - Coronavirus cases rise in Pakistan, as authorities mull stricter measures.",
        description: "BBC URDU TV PROGRAMME SAIRBEEN",
        thumbnails: {
          default: {
            url: "https://i.ytimg.com/vi/FoD045_tC6k/sddefault.jpg"
          },
          medium: {},
          high: {}
        },
        url: "https://www.youtube.com/embed/FoD045_tC6k"
      },
      {
        videoId: 3,
        publishedAt: "2017-09-09T23:38:21.000Z",
        title:
          "Sairbeen 31 March 2020: Tableegh group in India linked to Covid-19 cases",
        description: "BBC URDU TV PROGRAMME SAIRBEEN",
        thumbnails: {
          default: {
            url: "https://i.ytimg.com/vi/YXgB_0L-g4o/sddefault.jpg"
          },
          medium: {},
          high: {}
        },
        url: "https://www.youtube.com/embed/YXgB_0L-g4o"
      }
    ];

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

    // YTSearch({ key: API_KEY, term: searchTerm }, data => {
    //   this.setState({
    //     videos: data,
    //     selectedVideo: data[0]
    //   });
    // });
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
