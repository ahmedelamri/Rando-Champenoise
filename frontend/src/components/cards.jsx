import PropTypes from "prop-types";

export default function Card({ randos }) {
  return (
    <div className="card">
      <img className="card-img" src={randos.picture} alt={randos.circuitname} />
      <h1>{randos.circuitname}</h1>
    </div>
  );
}

Card.propTypes = {
  randos: PropTypes.shape({
    circuitname: PropTypes.string,
    picture: PropTypes.string,
  }).isRequired,
};
