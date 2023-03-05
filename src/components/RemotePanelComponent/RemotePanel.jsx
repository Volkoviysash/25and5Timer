import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faPause, faSyncAlt } from "@fortawesome/free-solid-svg-icons";

const RemotePanel = ({ timerOnOff, timerReset }) => {
  return (
    <div className="remote">
      <button onClick={timerOnOff}>
        <FontAwesomeIcon icon={faPlay} />
        <FontAwesomeIcon icon={faPause} />
      </button>
      <button onClick={timerReset}>
        <FontAwesomeIcon icon={faSyncAlt} />
      </button>
    </div>
  );
};

export default RemotePanel;
