import React, { useEffect, useState } from "react";
import { BrowserRouter as Routes, Route, Router } from "react-router-dom";
import RandoDetails from "@pages/RandoDetails";
import "./App.css";
import Navbar from "./components/Navbar";

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
      <Router>
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
      </Router>
    </>
  );
}

export default App;
