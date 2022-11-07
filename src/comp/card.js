import React from "react";

//assets
import icon from "../assets/icon.png";
import icon1 from "../assets/icon1.png";

const Card = (props) => {
  const [open, setOpen] = React.useState(false);

  function expand() {
    setOpen(!open);
  }

  return (
    <div className="card">
      <div className="card--ques">
        <h1 className="card--ques--text">{props.title}</h1>
        <button className="card--ques--but" onClick={expand}>
          <img
            className="card--ques--img"
            src={open ? icon1 : icon}
            alt="expand img"
          />
        </button>
      </div>
      <div className="card--ans">{open?props.info:""}</div>
    </div>
  );
};

export default Card;
