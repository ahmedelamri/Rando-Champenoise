import React, { useEffect, useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import RandoDetails from "./pages/RandoDetails";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import "./App.css";

function App() {
  const [randos, setRandos] = useState([]);
  const [filter, setFilter] = useState({
    MinKm: "",
    MaxKm: "",
    dénivelé: "0",
    typeofcircuit: null,
  });

  useEffect(() => {
    fetch("http://localhost:5050/randos")
      .then((response) => response.json())
      .then((data) => {
        setRandos(data);
      });
  }, []);

  const handleOptionChange = (event) => {
    setFilter({ ...filter, dénivelé: event.target.value });
  };

  const handleOption2Change = (event) => {
    setFilter({ ...filter, typeofcircuit: event.target.value });
  };

  const handleInputMinChange = (event) => {
    setFilter({ ...filter, MinKm: event.target.value });
  };

  const handleInputMaxChange = (event) => {
    setFilter({ ...filter, MaxKm: event.target.value });
  };

  const location = useLocation();
  const showNavbar = location.pathname !== "/randos/:id";

  return (
    <>
      <div className="App">
        {showNavbar && (
          <Navbar
            onOptionChange={handleOptionChange}
            onOption2Change={handleOption2Change}
            onInputMinChange={handleInputMinChange}
            onInputMaxChange={handleInputMaxChange}
          />
        )}
      </div>
      <div>
        <Routes>
          <Route path="/" element={<Home randos={randos} filter={filter} />} />
          <Route path="/randos/:id" element={<RandoDetails />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
