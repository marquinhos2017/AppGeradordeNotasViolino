import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import { FaMusic, FaGuitar, FaCog } from "react-icons/fa";
import Escalas from "./pages/escalas";
import Acordes from "./pages/Acordes";
import Config from "./pages/Config";
import "./App.css";

export default function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={<Escalas />} />
          <Route path="/acordes" element={<Acordes />} />
          <Route path="/config" element={<Config />} />
        </Routes>

        {/* Bottom Navigation */}
        <div className="bottom-nav">
          <Link to="/" className="nav-item">
            <FaMusic size={24} />
            <span>Escalas</span>
          </Link>
          <Link to="/acordes" className="nav-item">
            <FaGuitar size={24} />
            <span>Acordes</span>
          </Link>
          <Link to="/config" className="nav-item">
            <FaCog size={24} />
            <span>Config</span>
          </Link>
        </div>
      </div>
    </Router>
  );
}
