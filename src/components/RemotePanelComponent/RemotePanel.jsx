import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faPause, faSyncAlt } from "@fortawesome/free-solid-svg-icons";

const RemotePanel = () => {
  return (
    <div className="remote">
      <button>
        <FontAwesomeIcon icon={faPlay} />
        <FontAwesomeIcon icon={faPause} />
      </button>
      <button>
        <FontAwesomeIcon icon={faSyncAlt} />
      </button>
    </div>
  );
};

export default RemotePanel;
