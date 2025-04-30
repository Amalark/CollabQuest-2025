import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Page from "./pages/Home";
import FocusModeContextProvider from "./contexts/FocusModeContextProvider";

const App = () => {
  return (
    <BrowserRouter>
      <FocusModeContextProvider>
        <Routes>
          <Route path="/" element={<Page />} />
        </Routes>
      </FocusModeContextProvider>
    </BrowserRouter>
  );
};

export default App;
