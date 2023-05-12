import React, { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker } from "react-leaflet";
import { useParams } from "react-router-dom";

function RandoDetails() {
  const [rando, setRando] = useState();
  const { id } = useParams();

  // const { position } = rando;

  useEffect(() => {
    fetch(`http://localhost:5050/randos/${id}`)
      .then((response) => response.json())
      .then((data) => setRando(data));
  }, []);

  // fetch => request => express => response => then response.json => data => setState => state

  return (
    rando && (
      <section className="Randodetails">
        <div>
          <h1>Hello et bienvenue sur {rando.circuitname}!</h1>

          <p>Nom : {rando.circuitname}</p>
          <p>Lieu : {rando.cityname}</p>
          <p>Description : {rando.typeofcircuit} </p>
          <div>
            <img
              className="imgRando"
              src={rando.picture}
              alt={rando.circuitname}
            />
          </div>
        </div>
        <div className="Mapcontainer">
          <MapContainer
            center={rando.position}
            zoom={13}
            scrollWheelZoom={false}
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker key={rando.id} position={rando.position} />
          </MapContainer>
        </div>
      </section>
    )
  );
}

export default RandoDetails;
