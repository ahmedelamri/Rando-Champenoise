import React, { useEffect, useState } from "react";
import { Link, Routes, Route } from "react-router-dom";
import Register from "@pages/Register";
import Login from "@pages/Login";
import RandoDetails from "./pages/RandoDetails";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import "./App.css";
import { useAuth } from "./contexts/AuthContext";

function App() {
  const { token, setToken } = useAuth();
  const [randos, setRandos] = useState([]);
  const [Filter, setFilter] = useState({
    MinKm: "",
    MaxKm: "",
    dénivelé: 0,
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
    // Filter.dénivelé = event.target.value
    setFilter({ ...Filter, dénivelé: event.target.value });
  };
  const handleOption2Change = (event) => {
    // Filter.dénivelé = event.target.value
    setFilter({ ...Filter, typeofcircuit: event.target.value });
  };
  const handleInputMinChange = (event) => {
    // Filter.MinKm = event.target.value
    setFilter({ ...Filter, MinKm: event.target.value });
  };
  const handleInputMaxChange = (event) => {
    // Filter.MaxKm = event.target.value
    setFilter({ ...Filter, MaxKm: event.target.value });
  };
  return (
    <>
      <div className="App">
        <Link to="/">Accueil</Link>
        <Link to="/home">Home</Link>
        {token == null ? (
          <>
            <Link to="/register">Register</Link>
            <Link to="/login">Login</Link>
          </>
        ) : (
          <button type="button" onClick={() => setToken(null)}>
            Logout
          </button>
        )}
        <Navbar
          onOptionChange={handleOptionChange}
          onOption2Change={handleOption2Change}
          onInputMinChange={handleInputMinChange}
          onInputMaxChange={handleInputMaxChange}
        />
      </div>
      <div>
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/home"
            element={<Home randos={randos} filter={Filter} />}
          />
          <Route path="/randos/:id" element={<RandoDetails />} />
        </Routes>
      </div>
    </>
  );
}
export default App;
