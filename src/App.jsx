import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Dashboard from './Gallery/Page/Dashboard';
import GalleryPage from "./Gallery/Page/GalleryPage";
import ImageDetail from "./Gallery/Page/ImageDetail";
// import Home from "./Gallery/Page/Home";
import Pokedex from "./Gallery/Page/Pokedex";
import "./index.css";
import Navbar from "./Gallery/components/Navbar/Navbar";

function App() {
  return (
   <Router>
      <Navbar />
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/pokedex" element={<Pokedex />} />
        <Route path="/galeri" element={<GalleryPage />} />
        <Route path="/detail/:id" element={<ImageDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
