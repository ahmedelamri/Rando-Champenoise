import React from "react";
import { MapContainer, TileLayer } from "react-leaflet";

function RandoDetails() {
  const position = [48.866667, 2.333333];

  return (
    <>
      <section>
        <div>
          <h1>Hello et bienvenue sur !</h1>

          <p>Nom : </p>
          <p>Lieu : </p>
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
  );
}

export default RandoDetails;
