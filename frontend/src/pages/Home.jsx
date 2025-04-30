import FocusModeToggle from "@/components/FocusModeToggle";
import MoodBoard from "@/components/MoodBoard";
import Pomodro from "@/components/Pomodro";
import Project from "@/components/Projects/Project";
import { FocusMode } from "@/contexts/FocusModeContext";
import React, { useContext } from "react";

const Page = () => {
  const { focusMode } = useContext(FocusMode);

  return (
    <div
      className={`${
        !focusMode ? "dark-bg" : "light-bg"
      } flex flex-col min-h-screen transition-all pb-20`}
    >
      <div className="flex items-end justify-end p-4 px-10">
        <FocusModeToggle />
      </div>
      <Project />
      <MoodBoard />
      <Pomodro />
    </div>
  );
};

export default Page;
