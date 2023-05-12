import PropTypes from "prop-types";

export default function Card({ randos }) {
  return (
    <div className="card">
      <img className="card-img" src={randos.picture} alt={randos.circuitname} />
      <p>{randos.circuitname}</p>
    </div>
  );
}

Card.propTypes = {
  randos: PropTypes.shape({
    circuitname: PropTypes.string,
    picture: PropTypes.string,
  }).isRequired,
};
