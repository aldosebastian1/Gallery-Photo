import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
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
      </Routes>
    </Router>
  );
}

export default App;
