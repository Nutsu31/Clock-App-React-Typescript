import React, { useState } from "react";
import styled, { css } from "styled-components";
import "./App.css";
import DayImg from "./assets/desktop/bg-image-daytime.jpg";
import NightImg from "./assets/desktop/bg-image-nighttime.jpg";
import Time from "./components/Body/Time";

function App() {
  const [isDay, setIsDay] = useState("");
  console.log(isDay);
  return (
    <Div isDay={isDay}>
      <Time setIsDay={setIsDay} />
    </Div>
  );
}

export default App;

const Div = styled.div(
  ({ isDay }: { isDay: string }) => css`
    width: 100vw;
    height: 100vh;
    background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
      url(${isDay === "evening" || isDay === "night" ? NightImg : DayImg})
        center,
      no-repeat;
    background-size: cover;
  `
);
