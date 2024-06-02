import React from "react";
import Register from "./components/Auth/Register";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/Auth/Login";
import MainLayout from "./layouts/MainLayout";

const App = () => {
  return (
    <MainLayout>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </MainLayout>
  );
};

export default App;
