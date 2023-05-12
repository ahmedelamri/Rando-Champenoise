import "./App.css";
import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Filtrage from "@components/filtrage";

function App() {

  const [randos, setRandos] = useState([]);
  const [Filter, setFilter] = useState({
    MinKm : '',
    MaxKm : '',
    dénivelé : 0,
    typeofcircuit : null,
  });

  useEffect(() => {
    fetch("http://localhost:5050/randos")
      .then((response) => response.json())
      .then((data) => {
        setRandos(data);
      });
  }, []);

  const handleOptionChange = (event) => {
    //Filter.dénivelé = event.target.value
    setFilter({...Filter, dénivelé : event.target.value});
  };

  const handleOption2Change = (event) => {
    //Filter.dénivelé = event.target.value
    setFilter({...Filter, typeofcircuit : event.target.value});
  };

  const handleInputMinChange = (event) => {
    //Filter.MinKm = event.target.value
    setFilter({...Filter, MinKm : event.target.value});
  };

  const handleInputMaxChange = (event) => {
    //Filter.MaxKm = event.target.value
    setFilter({...Filter, MaxKm : event.target.value});
  };

  return (
    <div className="App">
      <Navbar onOptionChange={handleOptionChange} onOption2Change={handleOption2Change} onInputMinChange={handleInputMinChange} onInputMaxChange={handleInputMaxChange} />
      <Filtrage data={randos} data2={Filter}/>
    </div>
  );
}

export default App;
