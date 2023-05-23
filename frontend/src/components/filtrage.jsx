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
    if (item.typeofcircuit === typeofcircuit || typeofcircuit === null) {
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
        <Card key={item.id} randos={item} />
      ))}
    </>
  );
}
Filtrage.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      circuitname: PropTypes.string,
      cityname: PropTypes.string,
      description: PropTypes.string,
      picture: PropTypes.string,
      latitude: PropTypes.number,
      longitude: PropTypes.number,
    })
  ).isRequired,
  data2: PropTypes.shape({
    MaxKm: PropTypes.string,
    MinKm: PropTypes.string,
    dénivelé: PropTypes.number,
    typeofcircuit: PropTypes.string,
  }).isRequired,
};
