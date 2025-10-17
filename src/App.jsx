import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Dashboard from './Gallery/Page/Dashboard';
import GalleryPage from "./Gallery/Page/GalleryPage";
import ImageDetail from "./Gallery/Page/ImageDetail";
import "./index.css";
import Navbar from "./Gallery/components/Navbar/Navbar";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navbar />} />
        {/* <Route path="/" element={<Dashboard />} /> */}
        <Route path="/galeri" element={<GalleryPage />} />
        <Route path="/detail/:id" element={<ImageDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
