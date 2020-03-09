import React, { Component } from "react";
import CelebrityHeader from "./celebrity_header";

class CelebrityCard extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="container pb-1">
          <div className="row">
            <CelebrityHeader></CelebrityHeader>
          </div>
        </div>
        <div className="celebrities-scroll-box">
          <div className="image-grid">
            <div className="col-sm-6 col-md-6 col-lg-6 col-xl-3">
              <div className="grid">
                <figure className="effect-marley">
                  <img
                    src="https://www.thenews.com.pk//assets/uploads/updates/2020-02-16/614935_2520636_PM-Imran-CPEC_updates.jpg"
                    alt="img12"
                  />
                  <figcaption>
                    <h2>
                      Imran <span>Khan</span>
                    </h2>
                    <p>Prime Minister of Pakistan</p>
                    <a href="#">View more</a>
                  </figcaption>
                </figure>
              </div>
            </div>
            <div className="col-sm-6 col-md-6 col-lg-6 col-xl-3">
              <div className="grid">
                <figure className="effect-marley">
                  <img
                    src="https://humansofpakistan.org/wp-content/uploads/2018/03/ph1.jpg"
                    alt="img12"
                  />
                  <figcaption>
                    <h2>
                      Pervez <span>Hoodbhoy</span>
                    </h2>
                    <p>Senior Analyst</p>
                    <a href="#">View more</a>
                  </figcaption>
                </figure>
              </div>
            </div>
            <div className="col-sm-6 col-md-6 col-lg-6 col-xl-3">
              <div className="grid">
                <figure className="effect-marley">
                  <img
                    src="https://i.ytimg.com/vi/2dD3xmdNuLU/maxresdefault.jpg"
                    alt="img12"
                  />
                  <figcaption>
                    <h2>
                      Zarrar <span>Khuhro</span>
                    </h2>
                    <p>Executive Producer - Dawn</p>
                    <a href="#">View more</a>
                  </figcaption>
                </figure>
              </div>
            </div>
            <div className="col-sm-6 col-md-6 col-lg-6 col-xl-3">
              <div className="grid">
                <figure className="effect-marley">
                  <img
                    src="https://pbs.twimg.com/profile_images/1213553166064766976/imXAQoZE_400x400.jpg"
                    alt="img12"
                  />
                  <figcaption>
                    <h2>
                      Aliya <span>Nazki</span>
                    </h2>
                    <p>Anchor Person - BBC</p>
                    <a href="#">View more</a>
                  </figcaption>
                </figure>
              </div>
            </div>
          </div>
          <div className="image-grid">
            <div className="col-sm-6 col-md-6 col-lg-6 col-xl-3">
              <div className="grid">
                <figure className="effect-marley">
                  <img
                    src="https://pbs.twimg.com/profile_images/429860093979410432/1f52fqIx_400x400.jpeg"
                    alt="img12"
                  />
                  <figcaption>
                    <h2>
                      Irfan <span>Husain</span>
                    </h2>
                    <p>Columnist</p>
                    <a href="#">View more</a>
                  </figcaption>
                </figure>
              </div>
            </div>
            <div className="col-sm-6 col-md-6 col-lg-6 col-xl-3">
              <div className="grid">
                <figure className="effect-marley">
                  <img
                    src="https://mayday.leftword.com/pub/media/sakshay_author/aijaz-ahmad-big.jpeg"
                    alt="img12"
                  />
                  <figcaption>
                    <h2>
                      Aijaz Ahmed <span>Mangi</span>
                    </h2>
                    <p>Senior Journalist</p>
                    <a href="#">View more</a>
                  </figcaption>
                </figure>
              </div>
            </div>
            <div className="col-sm-6 col-md-6 col-lg-6 col-xl-3">
              <div className="grid">
                <figure className="effect-marley">
                  <img
                    src="https://photo-cdn.urdupoint.com/media/2019/07/_3/730x425/pic_1562782876.jpg"
                    alt="img12"
                  />
                  <figcaption>
                    <h2>
                      Ahmed Nadeem <span>Qasmi</span>
                    </h2>
                    <p>Senior Journalist</p>
                    <a href="#">View more</a>
                  </figcaption>
                </figure>
              </div>
            </div>
            <div className="col-sm-6 col-md-6 col-lg-6 col-xl-3">
              <div className="grid">
                <figure className="effect-marley">
                  <img
                    src="https://i.dawn.com/primary/2019/05/5cef38d262cef.jpg"
                    alt="img12"
                  />
                  <figcaption>
                    <h2>
                      Idrees <span>Bakhtiar</span>
                    </h2>
                    <p>Senior Journalist - BBC</p>
                    <a href="#">View more</a>
                  </figcaption>
                </figure>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default CelebrityCard;
