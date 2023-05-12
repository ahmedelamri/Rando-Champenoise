import PropTypes from "prop-types";

export default function Card({ randos }) {
  return (
    <figure className="card">
      <img className="card-img" src={randos.picture} alt={randos.circuitname} />

      <figcaption className="titleRando">{randos.circuitname}</figcaption>
    </figure>
  );
}

Card.propTypes = {
  randos: PropTypes.shape({
    circuitname: PropTypes.string,
    picture: PropTypes.string,
  }).isRequired,
};
