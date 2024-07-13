// src/Timer.js
import React, { useState, useEffect } from 'react';
import './Timer.css';

const Timer = ({ initialHours = 10, initialMinutes = 0, initialSeconds = 0 }) => {
  const [hours, setHours] = useState(initialHours);
  const [minutes, setMinutes] = useState(initialMinutes);
  const [seconds, setSeconds] = useState(initialSeconds);

  useEffect(() => {
    const timer = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      } else {
        if (minutes > 0) {
          setMinutes(minutes - 1);
          setSeconds(59);
        } else {
          if (hours > 0) {
            setHours(hours - 1);
            setMinutes(59);
            setSeconds(59);
          }
        }
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [seconds, minutes, hours]);

  return (
    <div className="timer">
      <div className="timer-box">
        <span>{hours < 10 ? `0${hours}` : hours}</span>
        <p className="timer-label">HOURS</p>
      </div>
      <div className="timer-box">
        <span>{minutes < 10 ? `0${minutes}` : minutes}</span>
        <p className="timer-label">MINUTES</p>
      </div>
      <div className="timer-box">
        <span>{seconds < 10 ? `0${seconds}` : seconds}</span>
        <p className="timer-label">SECONDS</p>
      </div>
    </div>
  );
};

export default Timer;
