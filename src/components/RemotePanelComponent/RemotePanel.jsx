import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faPause, faSyncAlt } from "@fortawesome/free-solid-svg-icons";

const RemotePanel = ({ controlTime, timerReset }) => {
  return (
    <div className="remote">
      <button onClick={controlTime}>
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
