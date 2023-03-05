import React, { useState } from "react";
import RemotePanel from "./components/RemotePanelComponent/RemotePanel";
import Timer from "./components/TimerComponent/Timer";
import OptionComponent from "./components/TimerOptionComponent/TimerOption";
import TitleComponent from "./components/TitleComponent/TitleComponent";
import "./index.css";

function App() {
  const setNewColor = (color) => {
    var colors = {
      red: "#FB6964",
      blue: "#82e7f0",
      green: "#73A857",
    };
    let newColor = colors[color];
    var r = document.querySelector(":root");
    r.style.setProperty("--background-color", newColor);
  };

  const [displayTime, setDisplayTime] = useState(25 * 60);
  const [breakTime, setBreakTime] = useState(5 * 60);
  const [sessionTime, setSessionTime] = useState(25 * 60);
  const [timerOn, setTimerOn] = useState(false);

  const formatTime = (time) => {
    let minutes = Math.floor(time / 60);
    let seconds = time % 60;

    return (
      (minutes < 10 ? "0" + minutes : minutes) +
      ":" +
      (seconds < 10 ? "0" + seconds : seconds)
    );
  };

  const changeTime = (amountTime, type) => {
    if (type == "break") {
      if (breakTime <= 60 && amountTime < 0) return;
      setBreakTime((prev) => prev + amountTime);
    } else if (type == "session") {
      if (sessionTime <= 60 && amountTime < 0) return;
      setSessionTime((prev) => prev + amountTime);
    }
    if (!timerOn) {
      setDisplayTime((prev) => prev + amountTime);
    }
  };

  const timerOnOff = () => {
    setTimerOn(!timerOn);
    console.log(timerOn);
  };

  const timerReset = () => {
    setBreakTime(5 * 60);
    setSessionTime(25 * 60);
    setDisplayTime(25 * 60);
  };

  return (
    <div className="App">
      <TitleComponent />
      <Timer time={formatTime(displayTime)} />
      <OptionComponent
        optionName="Break Length"
        type={"break"}
        optionValue={breakTime}
        changeTime={changeTime}
        formatTime={formatTime}
      />
      <OptionComponent
        optionName="Session Length"
        type={"session"}
        optionValue={sessionTime}
        changeTime={changeTime}
        formatTime={formatTime}
      />
      <RemotePanel timerOnOff={timerOnOff} timerReset={timerReset} />
    </div>
  );
}

export default App;
