import React, { useState, useEffect, useContext } from "react";
import { Button } from "./ui/button";
import { Textarea } from "./ui/textarea";
import { FocusMode } from "@/contexts/FocusModeContext";

const Pomodro = () => {
  const [isTimerOn, setIsTimerOn] = useState(false);
  const [time, setTime] = useState(25 * 60);
  const { focusMode } = useContext(FocusMode);

  useEffect(() => {
    let timer;
    if (isTimerOn && time > 0) {
      timer = setInterval(() => {
        setTime((prevTime) => prevTime - 1);
      }, 1000);
    } else if (time <= 0) {
      setIsTimerOn(false);
    }
    return () => clearInterval(timer);
  }, [isTimerOn, time]);

  function toggleTimer() {
    setIsTimerOn((prev) => !prev);
  }

  function resetTimer() {
    setIsTimerOn(false);
    setTime(25 * 60);
  }

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes.toString().padStart(2, "0")}:${seconds
      .toString()
      .padStart(2, "0")}`;
  };

  return (
    <div className="flex flex-col gap-6 items-center justify-center mt-5">
      <h1 className={`text-4xl font-bold text-white text-shadow-md`}>
        Pomodro Timer
      </h1>
      <div>
        <div
          className={`flex flex-col gap-4 items-center justify-center p-10 px-16 ${
            !focusMode ? "bg-red-500" : "bg-red-400"
          } rounded-lg shadow-lg`}
        >
          <h2 className=" text-5xl font-bold text-orange-50">
            {formatTime(time)}
          </h2>
          <div className="flex gap-4">
            <Button
              className="bg-amber-500 text-white px-4 py-2 p-6 rounded-xl font-semibold cursor-pointer hover:bg-amber-600"
              onClick={toggleTimer}
            >
              {isTimerOn ? "Pause Timer" : "Start Timer"}
            </Button>
            <Button
              className="bg-amber-100 text-orange-500 px-4 py-2 p-6 rounded-xl font-semibold cursor-pointer hover:bg-amber-200"
              onClick={resetTimer}
            >
              Reset Timer
            </Button>
          </div>
        </div>
      </div>
      <div className="max-w-[30%] w-full">
        <Textarea
          placeholder="What you did today?"
          className={"bg-white border border-orange-300 hover:bg-orange-50"}
        />
      </div>
    </div>
  );
};

export default Pomodro;
