import "./App.css";
import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Filtrage from "@components/filtrage";

function App() {
  const [randos, setRandos] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5050/randos")
      .then((response) => response.json())
      .then((data) => {
        setRandos(data);
      });
  }, []);

  const UserFilter = {
    MinKm : null,
    MaxKm : null,
    dénivelé : null,
    typeofcircuit : null,
  };

  return (
    <div className="App">
      <Navbar />

      

      <Filtrage data={randos} data2={UserFilter}/>
    </div>
  );
}

export default App;
