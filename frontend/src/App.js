import React from "react";
import Register from "./components/Auth/Register";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/Auth/Login";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
