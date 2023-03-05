import React from "react";

const Timer = ({ time, timerOn }) => {
  return <div className={timerOn ? "timerActive" : "timer"}>{time}</div>;
};

export default Timer;
