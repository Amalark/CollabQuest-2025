import React from "react";

const colors = [
  "lightcoral",
  "softyellow",
  "mintgreen",
  "lightblue",
  "wheat",
  "lightpink",
  "palegreen",
  "gold",
  "lavender",
  "pastelred",
  "plum",
  "softpeach",
  "pink",
  "powderblue",
  "lightorange",
];

const highlightedColor = "lightpink";

const MoodBoard = () => {
  return (
    <div className="bg-orange-200 p-4 rounded-2xl flex flex-col shadow-xl my-12 m-4">
      <h1 className="text-2xl font-bold mb-4 text-center">Mood Board</h1>

      <div>
        <h3 className="text-center text-xl font-bold text-orange-400 mb-2">
          Daily Color
        </h3>
        <div className="flex justify-center items-center">
          {colors.map((color, index) => (
            <div
              key={index}
              className={`transition-all duration-200 ${
                color === highlightedColor
                  ? "w-24 h-18 border-4 shadow-lg"
                  : "w-18 h-12 opacity-70"
              }`}
              style={{ backgroundColor: color }}
            ></div>
          ))}
        </div>
      </div>

      <div className="mt-8 flex flex-col items-center">
        <h2 className="text-center text-lg font-semibold italic text-orange-500 mb-2">
          Drop Your Doodle Here!
        </h2>

        <label
          htmlFor="doodle"
          className="bg-white border-4 border-dashed border-orange-300 text-orange-400 font-mono py-10 max-w-[90%] w-full rounded-xl text-center cursor-pointer hover:bg-orange-50 hover:scale-105 transition-all duration-300"
        >
          ✏️ Click or Drag & Drop Your Doodle!
          <input id="doodle" type="file" accept="image/*" className="hidden" />
        </label>
      </div>
    </div>
  );
};

export default MoodBoard;
