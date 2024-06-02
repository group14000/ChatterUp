import React from "react";
import Register from "./components/Auth/Register";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/Auth/Login";
import MainLayout from "./layouts/MainLayout";
import ChatRoom from "./Chat/ChatRoom";


const App = () => {
  return (
    <MainLayout>
      <BrowserRouter>
        <Routes>
          <Route path="/signup" element={<Register />} />
          <Route path="/" element={<Login />} />
          <Route path="/chat" element={<ChatRoom />} />
        </Routes>
      </BrowserRouter>
    </MainLayout>
  );
};

export default App;
