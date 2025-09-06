// src/App.jsx
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SortingPage from "./pages/Sorting";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sorting" element={<SortingPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
