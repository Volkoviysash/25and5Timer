import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleUp, faAngleDown } from "@fortawesome/free-solid-svg-icons";

const OptionComponent = ({
  optionName,
  type,
  optionValue,
  changeTime,
  formatTime,
}) => {
  return (
    <div className="option">
      <div className="optionTitle">{optionName}</div>
      <div className="setOptions">
        <button onClick={() => changeTime(60, type)}>
          <FontAwesomeIcon icon={faAngleUp} />
        </button>
        <div className="optionValue">{formatTime(optionValue)}</div>
        <button onClick={() => changeTime(-60, type)}>
          <FontAwesomeIcon icon={faAngleDown} />
        </button>
      </div>
    </div>
  );
};

export default OptionComponent;
