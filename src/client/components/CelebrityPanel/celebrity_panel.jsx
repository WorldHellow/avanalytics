import React, { Component } from "react";
import ContentLoader from "react-content-loader";
import CelebrityHeader from "./celebrity_header";
import CelebrityCard from "./celebrity_card";
import { getCelebrities } from "../../services/celebrityService";
import socket from "../socketContext";

const CelebrityCardLoader = () => (
  <ContentLoader
    gradientRatio={0.2}
    backgroundColor={"#756f6f"}
    foregroundColor={"#333"}
    speed={2}
  >
    <rect x="4" y="10" rx="5" ry="5" width="120" height="175" />
  </ContentLoader>
);

class CelebrityPanel extends Component {
  state = { celebrities: {}, currentCelebrities: [] };

  async componentDidMount() {
    const { data } = await getCelebrities();
    this.setState({ celebrities: data.celebrities });

    socket.on("FacialRecognitionClient", (data) => {
      console.log("Data from FacialRecognition Module :", data);
      const celebrities = [...this.state.currentCelebrities];

      const checkCelebId = (celeb) => celeb.celeb_id === data.celeb_id;

      if (!celebrities.some(checkCelebId)) {
        const currentCelebrities = [...celebrities, data];
        this.setState({ currentCelebrities });
      }
    });
  }

  render() {
    const { currentCelebrities, celebrities } = this.state;
    return (
      <React.Fragment>
        <div className="container pb-1">
          <div className="row">
            <CelebrityHeader />
          </div>
        </div>
        <div className="celebrities-scroll-box">
          <div className="image-grid">
            {currentCelebrities.map((item) => (
              <CelebrityCard
                key={item.celeb_id}
                celebrity={celebrities.find(
                  (o) => o.celeb_id === item.celeb_id
                )}
              />
            ))}
            {(!Array.isArray(currentCelebrities) ||
              !currentCelebrities.length) && <CelebrityCardLoader />}
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default CelebrityPanel;
