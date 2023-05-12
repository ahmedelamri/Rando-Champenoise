import Logo from "../images/Rando-Champ.png";
import Fonts from "../images/Fonts.png";

export default function Navbar(props) {

  const handleSelectChange = (event) => {
    props.onOptionChange(event);
  };

  const handleSelect2Change = (event) => {
    props.onOption2Change(event);
  };

  const handleInputMinChange = (event) => {
    props.onInputMinChange(event);
  };

  const handleInputMaxChange = (event) => {
    props.onInputMaxChange(event);
  };

  return (
    <div>
      <nav className="navbar">
        <img className="navbar-img" src={Logo} alt="Rando'Champenoise" />
        <img className="nav" src={Fonts} alt="fonts" />
      </nav>
      <nav>
        <select onChange={handleSelectChange} >

          <option value={"0"}>---</option>
          <option value={"1"} >facile</option>
          <option value={"2"} >normal</option>
          <option value={"3"} >hard</option>

        </select>

        <select onChange={handleSelect2Change} >

          <option value={"0"}>---</option>
          <option value={"discover circuits"} >discover circuits</option>
          <option value={"viticultural circuits"} >viticultural circuits</option>
          <option value={"The heritage circuits"} >The heritage circuits</option>
          <option value={"Nature circuits"} >Nature circuits</option>
          <option value={"The memory circuits"} >The memory circuits</option>

        </select>

        <input type="number" step="0.1" placeholder="min km" name="min" onChange={handleInputMinChange} ></input>
        <input type="number" step="0.1" placeholder="max km" name="max" onChange={handleInputMaxChange} ></input>

      </nav>
    </div>
  );
}
