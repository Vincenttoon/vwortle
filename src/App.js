import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";

import SixBoard from "./pages/SixBoard";
import FourBoard from "./pages/FourBoard";

import Layout from "./components/Layout";

function App() {
  return <div className="App">
    <Layout>
      <Router>
        <Routes>
          <Route path="/" element={<SixBoard />} />
          <Route path="/FourBoard" element={<FourBoard />} />
        </Routes>
      </Router>
    </Layout>
  </div>;
}

export default App;
