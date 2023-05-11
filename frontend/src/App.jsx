import "./App.css";
import Navbar from "./components/Navbar";
import React, { useEffect, useState } from "react";

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
    <div className="App">
      <Home />
      <p>coucou</p>
    </div>
  );
}

export default App;
