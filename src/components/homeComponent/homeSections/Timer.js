

import React, { useState, useEffect } from "react";

const Timer = () => {
  const [timeLeft, setTimeLeft] = useState({
    hours: "00",
    minutes: "00",
    seconds: "00",
  });

  useEffect(() => {
    function getNextTargetTime() {
      const now = new Date();
      const targetHour = 24; // Midnight, or change this to any hour you'd like to reset to
      const targetTime = new Date(
        now.getFullYear(),
        now.getMonth(),
        now.getDate(),
        targetHour,
        0,
        0,
        0
      );

      // If the target time is in the past for today, move to the next day
      if (targetTime.getTime() < now.getTime()) {
        targetTime.setDate(targetTime.getDate() + 1);
      }

      return targetTime.getTime();
    }

    function updateCountdown() {
      const countrevTime = getNextTargetTime();
      const time = new Date().getTime();
      const timeLeft = countrevTime - time;

      const hours = Math.floor(
        (timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

      setTimeLeft({
        hours: ("0" + hours).slice(-2),
        minutes: ("0" + minutes).slice(-2),
        seconds: ("0" + seconds).slice(-2),
      });
    }

    const intervalId = setInterval(updateCountdown, 1000);

    // Initial call to set the countdown right away
    updateCountdown();

    // Cleanup the interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="timer">
      <div className="timer-box">
        <span id="hours">{timeLeft.hours}</span>
        <div className="timer-label">hours</div>
      </div>
      <div className="timer-box">
        <span id="minutes">{timeLeft.minutes}</span>
        <div className="timer-label">minutes</div>
      </div >
      <div className="timer-box">
        <span id="seconds">{timeLeft.seconds}</span>
        <div className="timer-label">seconds</div>
      </div>

      {/* <div className="timer-box">
        <span id="seconds">{timeLeft.hours}:{timeLeft.minutes}:{timeLeft.seconds}</span>
        
      </div> */}

    </div>
  );
};

export default Timer;

