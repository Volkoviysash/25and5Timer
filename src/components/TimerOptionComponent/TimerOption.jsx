import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleUp, faAngleDown } from "@fortawesome/free-solid-svg-icons";

const OptionComponent = ({ optionName, optionValue, state, stateChange }) => {
  const handleIncrementValue = () => {
    stateChange(state + 1);
  };

  const handleDecrementValue = () => {
    stateChange(state - 1);
  };

  return (
    <div className="option">
      <div className="optionTitle">{optionName}</div>
      <div className="setOptions">
        <button onClick={handleIncrementValue}>
          <FontAwesomeIcon icon={faAngleUp} />
        </button>
        <div className="optionValue">{optionValue}</div>
        <button onClick={handleDecrementValue}>
          <FontAwesomeIcon icon={faAngleDown} />
        </button>
      </div>
    </div>
  );
};

export default OptionComponent;
