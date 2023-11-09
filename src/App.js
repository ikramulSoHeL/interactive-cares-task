import React from "react";
import { Routes, Route } from "react-router-dom";

import HomePage from "./pages/homePage/HomePage";
import AboutPage from "./pages/aboutPage/AboutPage";
import DestinationDetailsPage from "./pages/destinationDetailsPage/DestinationDetailsPage";
import LoginPage from "./pages/authPages/LoginPage";
import RegisterPage from "./pages/authPages/RegisterPage";
import ErrorPage from "./pages/errorPage/ErrorPage";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/destinations" element={<DestinationDetailsPage />} />

        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />

        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </div>
  );
};

export default App;
