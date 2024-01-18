import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";

import FourBoard from "./pages/FourBoard";
import FiveBoard from "./pages/FiveBoard";
import SixBoard from "./pages/SixBoard";
import SevenBoard from "./pages/SevenBoard";
import EightBoard from "./pages/EightBoard";


import Layout from "./components/Layout";

function App() {
  return <div className="App">
    <Layout>
      <Router>
        <Routes>
          <Route path="/" element={<SixBoard />} />
          <Route path="/FourBoard" element={<FourBoard />} />
          <Route path="/FiveBoard" element={<FiveBoard />} />
          <Route path="/SevenBoard" element={<SevenBoard />} />
          <Route path="/EightBoard" element={<EightBoard />} />
        </Routes>
      </Router>
    </Layout>
  </div>;
}

export default App;
