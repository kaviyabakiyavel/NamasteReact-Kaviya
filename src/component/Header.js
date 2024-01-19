import { LOGO_URL } from "../utils/constants";
import NavItems from "./NavItems";

const Header = () => {
  return (
    <div className="header">
      <div className="logoContainer">
        <img className="logo" src={LOGO_URL} />
      </div>
      <div className="nav-items">
        <NavItems />
      </div>
    </div>
  );
};

export default Header;
