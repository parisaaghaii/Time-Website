import React from 'react'
import { useState , useEffect} from 'react';
import "./TimeDegital.css";

export default function TimeDegital() {
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);
  });

  return (
    <div className="mytime">
      <div>{time}</div>
    </div>
  );
}
