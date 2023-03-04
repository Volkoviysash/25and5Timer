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

  const [breakLength, setBreakLength] = useState(5);
  const [sessionLength, setSessionLength] = useState(25);

  return (
    <div className="App">
      <TitleComponent />
      <Timer />
      <OptionComponent
        optionName="Break Length"
        optionValue={breakLength}
        state={breakLength}
        stateChange={setBreakLength}
      />
      <OptionComponent
        optionName="Session Length"
        optionValue={sessionLength}
        state={sessionLength}
        stateChange={setSessionLength}
      />
      <RemotePanel />
    </div>
  );
}

export default App;
