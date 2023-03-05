import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const TitleComponent = ({ onBreak }) => {
  return (
    <div className="title">
      <h1 className="timerTitle">Backlagano Timer</h1>
      {/* <h3 className="timerType">{onBreak ? "Break" : "Session"}</h3> */}
    </div>
  );
};

export default TitleComponent;
