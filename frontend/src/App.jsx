import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Page from "./pages/Page";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Page />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
