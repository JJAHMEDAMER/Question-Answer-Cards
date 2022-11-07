import React from "react";

//assets
import icon from "../assets/icon.png";

const Card = () => (
  <div className="card">
    <div className="card--ques">
      <h1 className="card--ques-text">Card Hello World</h1>
      <button className="card--ques--but">
        <img className="card--ques--img" src={icon} alt="expand img" />
      </button>
    </div>
  </div>
);

export default Card;
