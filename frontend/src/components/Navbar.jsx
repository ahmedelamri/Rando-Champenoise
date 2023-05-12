import Logo from "../images/Rando-Champ.png";
import Fonts from "../images/Fonts.png";
import Gif from "../images/Foret.gif";

export default function Navbar() {
  return (
    <div>
      <img className="gif" src={Gif} alt="Foret" />
      <nav className="navbar">
        <img className="navbar-img" src={Logo} alt="Rando'Champenoise" />
        <img className="nav" src={Fonts} alt="fonts" />
      </nav>
    </div>
  );
}
