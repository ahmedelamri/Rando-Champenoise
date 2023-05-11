import Logo from "../images/Rando-Champ.png";
import Fonts from "../images/Fonts.png";

export default function Navbar() {
  return (
    <nav className="navbar">
      <img className="navbar-img" src={Logo} alt="Rando'Champenoise" />
      <img className="nav" src={Fonts} alt="fonts" />
    </nav>
  );
}
