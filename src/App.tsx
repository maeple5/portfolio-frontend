import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import V4Home from "./components/v4/V4Home";

// import AuthProvider from "./contexts/Auth";
const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/v4" element={<V4Home />} />
      </Routes>
    </div>
  );
};

export default App;
