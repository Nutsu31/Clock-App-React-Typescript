import React from "react";
import styled, { css } from "styled-components";
import HiddenMenuCSS from "../styles/hiddenTimeMenu.module.css";

const HiddenTimeMenu = ({
  showDetails,
  currentTimeZone,
  dayOfWeek,
  numberOfWeek,
  dayOfYear,
}: {
  showDetails: boolean;
  currentTimeZone: string;
  dayOfWeek: number;
  numberOfWeek: number;
  dayOfYear: number;
}) => {
  const currentTimeZoneText = "CURRENT TIMEZONE";
  const dayOfYearText = "Day of the year";
  const dayOfWeekText = "Day of the week";
  const numberOfWeekText = "Week number";

  return (
    <HiddenDiv
      showDetails={showDetails}
      currentTimeZone={currentTimeZone}
      dayOfWeek={dayOfWeek}
      numberOfWeek={numberOfWeek}
    >
      <div className={HiddenMenuCSS.hiddenMenuTextDiv}>
        <div className={HiddenMenuCSS.spaceBetweenDiv}>
          <HeadText>{currentTimeZoneText}</HeadText>
          <CurrentTimeZoneSettings currentTimeZone={currentTimeZone}>
            {currentTimeZone}
          </CurrentTimeZoneSettings>
        </div>
        <div className={HiddenMenuCSS.spaceBetweenDiv}>
          <HeadText>{dayOfYearText}</HeadText>
          <CurrentTimeZoneSettings>{dayOfYear}</CurrentTimeZoneSettings>
        </div>
      </div>
      <div className={HiddenMenuCSS.middleLineDiv}></div>
      <div className={HiddenMenuCSS.hiddenMenuTextDiv}>
        <div className={HiddenMenuCSS.spaceBetweenDiv}>
          <HeadText>{dayOfWeekText}</HeadText>
          <CurrentTimeZoneSettings>{dayOfWeek}</CurrentTimeZoneSettings>
        </div>
        <div className={HiddenMenuCSS.spaceBetweenDiv}>
          <HeadText>{numberOfWeekText}</HeadText>
          <CurrentTimeZoneSettings>{numberOfWeek}</CurrentTimeZoneSettings>
        </div>
      </div>
    </HiddenDiv>
  );
};

export default HiddenTimeMenu;

const HeadText = styled.p`
  font-weight: 400;
  font-size: 15px;
  line-height: 28px;
  display: flex;
  align-items: flex-end;
  letter-spacing: 3px;
  text-transform: uppercase;
  @media (max-width: 600px) {
    font-size: 10px;
  }
`;

const CurrentTimeZoneSettings = styled.p(
  ({ currentTimeZone }: { currentTimeZone?: string }) => css`
    font-weight: 700;
    font-size: 56px;
    line-height: 68px;
    display: flex;
    align-items: flex-end;
    color: #303030;
    @media (max-width: 600px) {
      font-size: 20px;
      line-height: 24px;
    }
  `
);

const HiddenDiv = styled.div(
  ({
    showDetails,
  }: {
    showDetails: boolean;
    currentTimeZone?: string;
    dayOfWeek?: number;
    numberOfWeek?: number;
  }) => css`
    width: 100%;
    height: 400px;
    background: rgba(255, 255, 255, 0.75);
    backdrop-filter: blur(20.3871px);
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    position: absolute;
    left: 0px;
    bottom: ${showDetails ? "0" : "-400px"};
    transition: 0.3s ease;
    @media (max-width: 600px) {
      flex-direction: column;
      justify-content: center;
      gap: 24px;
      padding: 48px;
    }
  `
);
