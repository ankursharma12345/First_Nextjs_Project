"use client";
import React, { useEffect, useState } from "react";
import Countdown from "react-countdown";

const CountDown = () => {
  {
    /* using state because if don't use this then time of client side and server side is different so it produces Hydration error . For this , I use useEffect hook and state to rendered server after client renders completely for not producing hydration error  */
  }
  const [showDate, setShowDate] = useState(false);
  const finalDate = new Date("2025-05-31");
  useEffect(() => {
    setShowDate(true);
  }, []);
  return <div> {showDate && <Countdown date={finalDate} />}</div>;
};

export default CountDown;
