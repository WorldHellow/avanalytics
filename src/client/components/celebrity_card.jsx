import React, { Component } from "react";
import CelebrityHeader from "./celebrity_header";
import CelebrityItem from "./celebrity_item";
import { getCelebrities } from "../services/celebrityService";

class CelebrityCard extends Component {
  state = { celebrities: {}, currentCelebrities: [] };

  async componentDidMount() {
    const { data } = await getCelebrities();
    this.setState({ celebrities: data.celebrities });

    this.props.socket.on("FacialRecognitionClient", data => {
      console.log("Data from FacialRecognition Module :", data);
      const celebrities = [...this.state.currentCelebrities];

      const checkCelebId = celeb => celeb.celeb_id === data.celeb_id;

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
            <CelebrityHeader></CelebrityHeader>
          </div>
        </div>
        <div className="celebrities-scroll-box">
          <div className="image-grid">
            {currentCelebrities.map(item => (
              <CelebrityItem
                celebrity={celebrities.find(o => o.celeb_id === item.celeb_id)}
              ></CelebrityItem>
            ))}
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default CelebrityCard;
