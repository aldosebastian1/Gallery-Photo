import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import GalleryPage from "./Gallery/Page/GalleryPage";
import ImageDetail from "./Gallery/Page/ImageDetail";
import Pokedex from "./Gallery/Page/Pokedex";
import Navbar from "./Gallery/components/Navbar/Navbar";
import DashboardDisplay from "./Gallery/Page/DashboardDisplay";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<DashboardDisplay />} />
        <Route path="/pokedex" element={<Pokedex />} />
        <Route path="/galeri" element={<GalleryPage />} />
        <Route path="/detail/:id" element={<ImageDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
