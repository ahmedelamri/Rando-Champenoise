import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function Card({ randos }) {
  return (
    <div className="card">
      <Link to={`/randos/${randos.id}`}>
        <img
          className="card-img"
          src={randos.picture}
          alt={randos.circuitname}
        />
       <p>{randos.circuitname}</p>
      </Link>
    </div>
  );
}

Card.propTypes = {
  randos: PropTypes.shape({
    id: PropTypes.number.isRequired,
    circuitname: PropTypes.string.isRequired,
    picture: PropTypes.string.isRequired,
  }).isRequired,
};
