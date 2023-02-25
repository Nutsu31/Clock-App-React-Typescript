import axios from "axios";
import React, { useEffect, useState } from "react";
import ArrowUp from "../../assets/desktop/icon-arrow-up.svg";
import ArrowDown from "../../assets/desktop/icon-arrow-down.png";
import TimeCSS from "../styles/time.module.css";
import Sun from "../../assets/desktop/icon-sun.svg";
import Moon from "../../assets/desktop/icon-moon.svg";
import HiddenTimeMenu from "../Footer/HiddenTimeMenu";

/////////////////////////////////////////////////////////////

const Time = ({
  setIsDay,
}: {
  setIsDay: React.Dispatch<React.SetStateAction<string>>;
}) => {
  const [timeday_gen, setTimeday_gen] = useState("");
  const [city, setCity] = useState("");
  const [countryCode, setCountryCode] = useState("");
  const [currentTimeZone, setCurrentTimeZone] = useState("");
  const [dayOfWeek, setDayOfWeek] = useState(Number);
  const [dayOfYear, setDayOfYear] = useState(Number);
  const [numberOfWeek, setNumberOfWeek] = useState(Number);

  const [seconds, setSeconds] = useState(Number);
  const [showDetails, setShowDetails] = useState(false);

  useEffect(() => {
    const getTimeZone = async () => {
      const response = await axios.get(
        "https://timezoneapi.io/api/ip/?token=asFwdRjOWzGPFZxRymYj"
      );
      const data = await response.data;
      console.log(data);
      setTimeday_gen(data.data.datetime.timeday_gen);
      setCity(data.data.city);
      setCountryCode(data.data.country_code);
      setCurrentTimeZone(data.data.datetime.offset_tzid);
      setDayOfWeek(date.getDay());
      setNumberOfWeek(data.data.datetime.week);
      setDayOfYear(data.data.datetime.week * 7);
      setIsDay(timeday_gen);
    };

    getTimeZone();
  }, []);

  //////////////////////////////////////////////////////////

  const date = new Date();
  const hr = date.getHours();
  const min = date.getMinutes();
  const sec = date.getSeconds();
  setInterval(() => setSeconds(sec), 1000);
  const fullTime = hr + ":" + min + ":" + sec;

  ////////////////////////////////////////////////////////////

  const headText =
    "The science of operations, as derived from mathematics more especially, is a science of itself, and has its own abstract truth and value.";
  const headTextAuthor = "Ada Lovelace";
  const greetingText = `GOOD ${timeday_gen}, IT’S CURRENTLY`;
  const placeText = `IN ${city}, ${countryCode}`;

  ////////////////////////////////////////////////////////////

  return (
    <div
      className={
        showDetails ? TimeCSS.setItemsStartWhenDetailsShow : TimeCSS.flexDiv
      }
    >
      <div className={showDetails ? TimeCSS.hideTextWhenShowDetails : ""}>
        <p className={TimeCSS.headText}>{headText}</p>
        <p className={TimeCSS.headTextAuthor}>{headTextAuthor}</p>
      </div>

      <div>
        <div className={TimeCSS.timeFlexDiv}>
          <p className={TimeCSS.greeting}>
            <img
              className={TimeCSS.dayPeriodImg}
              src={
                timeday_gen === "evening" || timeday_gen === "night"
                  ? Moon
                  : Sun
              }
            />
            {greetingText.toUpperCase()}
          </p>
          <p className={TimeCSS.fullTime}>{fullTime}</p>
          <p className={TimeCSS.placeText}>{placeText.toUpperCase()}</p>

          <button
            className={TimeCSS.btn}
            onClick={() => setShowDetails(!showDetails)}
          >
            {showDetails ? "LESS" : "MORE"}
            <img src={showDetails ? ArrowDown : ArrowUp} />
          </button>
        </div>
      </div>
      <HiddenTimeMenu
        showDetails={showDetails}
        currentTimeZone={currentTimeZone}
        dayOfWeek={dayOfWeek}
        numberOfWeek={numberOfWeek}
        dayOfYear={dayOfYear}
      />
    </div>
  );
};

export default Time;
