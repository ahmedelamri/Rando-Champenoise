import React, { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Card from "./components/cards";

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
      <Navbar />
      <div className="cards">
        {randos.map((rando) => (
          <Card key={rando.id} randos={rando} />
        ))}
      </div>
    </div>
  );
}

export default App;
