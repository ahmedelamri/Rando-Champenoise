import Card from "@components/cards";
import React from "react";
import PropTypes from "prop-types";

function Home({ randos }) {
  return (
    <div>
      {randos.length === 0 ? (
        <p>Chargement en cours...</p>
      ) : (
        <div className="cards">
          {randos.map((rando) => (
            <Card randos={rando} />
          ))}
        </div>
      )}
    </div>
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
};

Home.defaultProps = {
  randos: [],
};

export default Home;
