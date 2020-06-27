import React, { useState, useEffect, useCallback } from "react";
import {
  addSeconds,
  differenceInSeconds,
  formatDistanceStrict,
} from "date-fns";

const useNow = (enabled = false) => {
  const [now, setNow] = useState(() => new Date());
  useEffect(() => {
    if (!enabled) return;
    const interval = setInterval(() => setNow(new Date()), 1000 / 60);
    return () => clearInterval(interval);
  }, [enabled]);
  return now;
};

export const Timer = ({ duration }) => {
  const [startTime, setStartTime] = useState();
  const now = useNow(!!startTime);
  const endTime = startTime && addSeconds(startTime, duration);

  const start = useCallback(() => setStartTime(new Date()), []);
  const stop = useCallback(() => setStartTime(null), []);

  useEffect(() => {
    if (endTime < now) stop();
  }, [now, endTime, stop]);

  const timeLeft = differenceInSeconds(endTime, now);

  const codePointOffset = Math.round(12 - (timeLeft * 12) / duration);

  return (
    <React.Fragment>
      <h3 style={{ fontSize: "3vw" }}>
        {endTime && String.fromCodePoint(0x1f550 + codePointOffset)}
        {endTime
          ? formatDistanceStrict(endTime, now)
          : formatDistanceStrict(addSeconds(new Date(), duration), new Date())}
      </h3>
      <button
        style={{ fontSize: "3vw" }}
        type="button"
        onClick={startTime ? stop : start}
      >
        {startTime ? "Stop" : "Start"}
      </button>
    </React.Fragment>
  );
};
