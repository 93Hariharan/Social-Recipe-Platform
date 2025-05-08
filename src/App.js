import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Register from "./components/Register";
import Login from "./components/Login";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import ImageUploader from "./components/ImageUploader";
import { ImageProvider } from './context/ImageContext';
const App = () => {
  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
  return (
    <ImageProvider>
      <Router>
      {isLoggedIn && <Navbar />} 
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={isLoggedIn ? <Home /> : <Navigate to="/login" replace />} />
        <Route path="/create" element={<ImageUploader />} />
        <Route path="/" element={<Navigate to={isLoggedIn ? "/home" : "/login"} replace />} />
        <Route path="*" element={<div>404 Not Found</div>} />
      </Routes>
    </Router>
    </ImageProvider>
    
  );
};
export default App;