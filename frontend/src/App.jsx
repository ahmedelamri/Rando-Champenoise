import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import RandoDetails from "@pages/RandoDetails";
import Home from "@pages/Home";
import Navbar from "./components/Navbar";
import "./App.css";

function App() {
  const [randos, setRandos] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5050/randos")
      .then((response) => response.json())
      .then((data) => {
        setRandos(data);
      });
  }, []);

  return (
    <>
      <div className="App">
        <Navbar />
      </div>

      <div>
        <Routes>
          <Route path="/" element={<Home randos={randos} />} />

          <Route path="/randos/:id" element={<RandoDetails />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
