import React from "react";
import { Routes, Route } from "react-router-dom";

import HomePage from "./pages/homePage/HomePage";
import AboutPage from "./pages/aboutPage/AboutPage";
import DestinationDetailsPage from "./pages/destinationDetailsPage/DestinationDetailsPage";
import ErrorPage from "./pages/errorPage/ErrorPage";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/destinations" element={<DestinationDetailsPage />} />

        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </div>
  );
};

export default App;
