import React from "react";
import PropTypes from "prop-types";
import Regles from "../components/Regles";
import Filtrage from "../components/filtrage";

function Home({ randos, filter }) {
  return (
    <>
      {randos.length === 0 ? (
        <p>Chargement en cours...</p>
      ) : (
        <div className="cards">
          <Filtrage data={randos} data2={filter} />
        </div>
      )}
      <Regles />
    </>
  );
}

Home.propTypes = {
  randos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      circuitname: PropTypes.string,
      cityname: PropTypes.string,
      description: PropTypes.string,
      picture: PropTypes.string,
      latitude: PropTypes.number,
      longitude: PropTypes.number,
    })
  ),
  filter: PropTypes.shape({
    MaxKm: PropTypes.string,
    MinKm: PropTypes.string,
    dénivelé: PropTypes.number,
    typeofcircuit: PropTypes.string,
  }).isRequired,
};

Home.defaultProps = {
  randos: [],
};

export default Home;
