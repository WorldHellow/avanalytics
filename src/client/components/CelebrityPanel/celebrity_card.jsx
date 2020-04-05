import React from "react";
import _ from "lodash";

const CelebrityCard = ({ celebrity }) => {
  const publicURL = process.env.REACT_APP_PUBLIC_URL;
  const name = celebrity.name.split("_");

  return (
    <div className="col-sm-6 col-md-6 col-lg-6 col-xl-3">
      <div className="grid">
        <figure className="effect-marley">
          <img
            src={`${publicURL}/celebrities/pictures/${celebrity.picture}`}
            alt={celebrity.name}
          />
          <figcaption>
            <h2>
              {_.upperFirst(name[0])}{" "}
              <span>{`${_.upperFirst(name[1])} ${_.upperFirst(name[2])}`}</span>
            </h2>
            <p>{celebrity.about}</p>
            <a href="#">View more</a>
          </figcaption>
        </figure>
      </div>
    </div>
  );
};

export default CelebrityCard;
