import React, { useState } from "react";
import RemotePanel from "./components/RemotePanelComponent/RemotePanel";
import Timer from "./components/TimerComponent/Timer";
import OptionComponent from "./components/TimerOptionComponent/TimerOption";
import TitleComponent from "./components/TitleComponent/TitleComponent";
import "./index.css";

function App() {
  const [displayTime, setDisplayTime] = useState(25 * 60);
  const [breakTime, setBreakTime] = useState(5 * 60);
  const [sessionTime, setSessionTime] = useState(25 * 60);
  const [timerOn, setTimerOn] = useState(false);
  const [onBreak, setOnBreak] = useState(false);
  const [breakAudio, setBreakAudio] = useState(
    new Audio("./sound/break-sound.mp3")
  );

  const playBreakAudio = () => {
    breakAudio.currentTime = 0;
    breakAudio.play();
  };

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

  const controlTime = () => {
    let second = 1000;
    let date = new Date().getTime();
    let nextDate = new Date().getTime() + second;
    let onBreakVariable = onBreak;
    if (!timerOn) {
      let interval = setInterval(() => {
        date = new Date().getTime();
        if (date > nextDate) {
          setDisplayTime((prev) => {
            if (prev <= 0 && !onBreakVariable) {
              playBreakAudio();
              onBreakVariable = true;
              setOnBreak(true);
              return breakTime;
            } else if (prev <= 0 && onBreakVariable) {
              playBreakAudio();
              onBreakVariable = false;
              setOnBreak(false);
              return sessionTime;
            }
            return prev - 1;
          });
          nextDate += second;
        }
      }, 30);
      localStorage.clear();
      localStorage.setItem("interval-id", interval);
    }

    if (timerOn) {
      clearInterval(localStorage.getItem("interval-id"));
    }

    setTimerOn(!timerOn);
  };

  const timerReset = () => {
    setBreakTime(5 * 60);
    setSessionTime(25 * 60);
    setDisplayTime(25 * 60);
  };

  return (
    <div className="App">
      <TitleComponent onBreak={onBreak} />
      <Timer time={formatTime(displayTime)} timerOn={timerOn} />
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
      <RemotePanel controlTime={controlTime} timerReset={timerReset} />
    </div>
  );
}

export default App;
