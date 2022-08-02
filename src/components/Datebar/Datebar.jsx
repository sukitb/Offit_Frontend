import React from "react";
import "./Datebar.css";
import CarlendarIcon from "../../assets/Vector (1).svg";
import DateNow from "./DateNow";

function Datebar() {
  return (
    <div className="DateBar">
      <img className="CarlendarIcon" src={CarlendarIcon} />
      <DateNow />
    </div>
  );
}

export default Datebar;