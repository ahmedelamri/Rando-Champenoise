import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import RandoDetails from "@pages/RandoDetails";
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
        {randos.length}
      </div>
      <div className="App">
        {randos.length === 0 ? (
          <p>Chargement en cours...</p>
        ) : (
          <p>{randos.length}</p>
        )}
      </div>
      <div>
        <Routes>
          <Route path="/randos/:id" element={<RandoDetails />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
