import React, { useState } from "react";
import { FocusMode } from "./FocusModeContext";

const FocusModeContextProvider = ({ children }) => {
  const [focusMode, setFocusMode] = useState(false);
  return (
    <FocusMode.Provider value={{ focusMode, setFocusMode }}>
      {children}
    </FocusMode.Provider>
  );
};

export default FocusModeContextProvider;
