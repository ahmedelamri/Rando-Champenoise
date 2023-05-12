import PropTypes from "prop-types";
import Card from "./cards";

export default function Filtrage({ data, data2 }) {
  const MinKm = parseInt(data2.MinKm, 10);
  const MaxKm = parseInt(data2.MaxKm, 10);
  const { typeofcircuit, dénivelé } = data2;
  const filtre = (item) => {
    let IsKm = false;
    let IsDénivelé = false;
    let IsTypeofcircuit = false;

    if (
      (item.distance >= MinKm && item.distance <= MaxKm) ||
      (Number.isNaN(MinKm) && item.distance <= MaxKm) ||
      (item.distance >= MinKm && Number.isNaN(MaxKm)) ||
      (Number.isNaN(MinKm) && Number.isNaN(MaxKm))
    ) {
      IsKm = true;
    }

    if (item.dénivelé === dénivelé || dénivelé === "0") {
      IsDénivelé = true;
    }

    if (item.typeofcircuit === typeofcircuit || typeofcircuit === "0") {
      IsTypeofcircuit = true;
    }

    if (IsKm === true && IsDénivelé === true && IsTypeofcircuit === true) {
      return true;
    }
    return false;
  };

  return (
    <>
      {data.filter(filtre).map((item) => (
        <Card randos={item} />
      ))}
    </>
  );
}

Filtrage.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      circuitname: PropTypes.string.isRequired,
      cityname: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      picture: PropTypes.string.isRequired,
      latitude: PropTypes.number.isRequired,
      longitude: PropTypes.number.isRequired,
    })
  ).isRequired,
  data2: PropTypes.shape({
    MaxKm: PropTypes.string,
    MinKm: PropTypes.string,
    dénivelé: PropTypes.number,
    typeofcircuit: PropTypes.string,
  }).isRequired,
};
