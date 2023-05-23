import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Logo from "../images/Rando-Champ.png";
import Fonts from "../images/Fonts.png";

export default function Navbar({
  onOptionChange,
  onOption2Change,
  onInputMinChange,
  onInputMaxChange,
}) {
  const handleSelectChange = (event) => {
    onOptionChange(event);
  };

  const handleSelect2Change = (event) => {
    onOption2Change(event);
  };

  const handleInputMinChange = (event) => {
    onInputMinChange(event);
  };

  const handleInputMaxChange = (event) => {
    onInputMaxChange(event);
  };

  return (
    <div>
      <nav className="navbar">
        <Link to="/">
          <img className="navbar-img" src={Logo} alt="Rando'Champenoise" />
          <img className="nav" src={Fonts} alt="fonts" />
        </Link>
      </nav>
      <div className="filternav">
        <select onChange={handleSelectChange}>
          <option value="0">Difficultés</option>
          <option value="1">facile</option>
          <option value="2">normal</option>
          <option value="3">hard</option>
        </select>

        <select onChange={handleSelect2Change}>
          <option value="0">Parcours</option>
          <option value="discover circuits">discover circuits</option>
          <option value="viticultural circuits">viticultural circuits</option>
          <option value="The heritage circuits">The heritage circuits</option>
          <option value="Nature circuits">Nature circuits</option>
          <option value="The memory circuits">The memory circuits</option>
        </select>

        <input
          type="number"
          step="0.1"
          placeholder="min km"
          name="min"
          onChange={handleInputMinChange}
        />
        <input
          type="number"
          step="0.1"
          placeholder="max km"
          name="max"
          onChange={handleInputMaxChange}
        />
      </div>
    </div>
  );
}

Navbar.propTypes = {
  onOptionChange: PropTypes.func.isRequired,
  onOption2Change: PropTypes.func.isRequired,
  onInputMinChange: PropTypes.func.isRequired,
  onInputMaxChange: PropTypes.func.isRequired,
};
