import React from "react";
import PropTypes from "prop-types";
import Card from "@components/cards";
import Regles from "../components/Regles";
import Filtrage from "../components/filtrage";

function Home({ randos, filter }) {
  return (
    <>
      <div className="cards">
        <Filtrage data={randos} data2={filter} />
        {randos.map((rando) => (
          <Card key={rando.id} randos={rando} />
        ))}
      </div>
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
      picture: PropTypes.string.isRequired,
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
