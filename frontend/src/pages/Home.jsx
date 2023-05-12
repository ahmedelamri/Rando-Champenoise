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
      id: PropTypes.number.isRequired,
      circuitname: PropTypes.string.isRequired,
      cityname: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      picture: PropTypes.string.isRequired,
      latitude: PropTypes.number.isRequired,
      longitude: PropTypes.number.isRequired,
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
