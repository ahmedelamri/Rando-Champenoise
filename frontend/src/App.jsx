import "./App.css";
import React, { useEffect, useState } from "react";
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

  console.log(randos);

  return (
    <div className="App">
      <Navbar />
      {randos.length}
    </div>
  );
}

export default App;
