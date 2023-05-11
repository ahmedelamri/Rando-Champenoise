import React, { useState, useEffect } from "react";

export default function Counter() {

  const Sectors = [
    {id: 0, sector:"Autour du Lac du Der"},
    {id: 1, sector:"Autour du Parc Naturel Régional de la Montagne de Reims"},
    {id: 2, sector:"Autour Epernay et Côte des Blancs"},
  ];
  
  const Data = [
    { id: "14", name: "Circuit des étangs Outines", size: "7", unmissable: false, Location: "Giffaumont-Champaubert", Sector: 0 },
    { id: "63", name: "Circuit entre vignes et faux ", size: "18", unmissable: false, Location: "Verzenay", Sector: 1 },
    { id: "43", name: "Circuit du Cubray", size: "10.5", unmissable: true, Location: "Ay", Sector: 1 },
    { id: "83", name: "Circuit de la vallée de la Marne", size: "30", unmissable: false, Location: "Vauciennes", Sector: 2 },
  ];
  
  const unmissable = null
  
  const MinKm = 0
  const MaxKm = 999
  
  const [Sector, setSector] = useState(null)

  const filterFunction = (item) => {

    if (item.Sector == Sector || Sectors[Sector] == null) { // si le around est equal a around ou null
      if (item.unmissable == unmissable || unmissable == null) { // si le unmissable est equal a unmissable ou null
        if (MinKm <= item.size && item.size <= MaxKm) { // si la size est entre le min & max
          return true;
        }
      }
    }

    return false;
  };

  return (
    <div>

      <select onChange={(event) => setSector(event.target.value)}>

        <option value={-1}>---</option>

        {

          Sectors.map(item =>
            
            <option key={item.id} value={item.id}> {item.id}: {item.sector}</option>
            
            )

        }

      </select>

      <h1>Results:</h1>

      {

        Data.filter(filterFunction).map(item =>

          <>
            <h5 key={item.id}> {item.id} : {item.name} [{item.size}Km] ({Sectors[item.Sector].id}) </h5>
          </>

        )

      }

    </div>
  );
}
