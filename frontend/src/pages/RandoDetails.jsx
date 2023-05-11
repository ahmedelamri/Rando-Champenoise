import React, { useState, useEffect } from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import { useParams } from "react-router-dom";

function RandoDetails() {
  const position = [48.866667, 2.333333];

  const [rando, setRando] = useState();
  const { id } = useParams();

  useEffect(() => {
    fetch(`http://localhost:5050/randos/${id}`)
      .then((response) => response.json())
      .then((data) => setRando(data));
  }, []);

  // fetch => request => express => response => then response.json => data => setState => state

  return (
    rando && (
      <>
        <section>
          <div>
            <h1>Hello et bienvenue sur {rando.circuitname}!</h1>

            <p>Nom : {rando.circuitname}</p>
            <p>Lieu : {rando.cityname}</p>
            <p>Description : </p>
          </div>
        </section>
        <section>
          <div style={{ height: "500px", width: "100%" }}>
            <MapContainer center={position} zoom={13} scrollWheelZoom={false}>
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
            </MapContainer>
          </div>
        </section>
      </>
    )
  );
}

export default RandoDetails;
