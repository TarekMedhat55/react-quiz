import { useEffect } from "react";

const Timer = ({ dispatch, secondRemaining }) => {
  const min = Math.floor(secondRemaining / 60);
  const seconds = secondRemaining % 60;

  useEffect(() => {
    const timer = setInterval(() => {
      dispatch({ type: "tick" });
    }, 1000);
    return () => clearInterval(timer);
  }, [dispatch]);

  return (
    <div className="timer">
      {min < 10 && "0"}:{min}:{seconds < 10 && "0"}
      {seconds}
    </div>
  );
};

export default Timer;
