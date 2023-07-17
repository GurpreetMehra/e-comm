import "./Header.scss";
import SearchIcon from "../../assets/icons/search.png";
import Heart from "../../assets/icons/heart.png";
import Profile from "../../assets/icons/profile.png";
import Shopping from "../../assets/icons/shopping.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div className="nav-bar-container">
        <div className="left-container">
          <div className="logo">
            <b>Exclusive</b>
          </div>
          <div className="navigation-bar">
            <Link href="#">Home</Link>
            <Link href="#">Contact</Link>
            <Link href="#">About</Link>
            <Link href="#">Sign Up</Link>
          </div>
        </div>
        <div className="right-container">
          <div className="seach-container">
            <input type="text" placeholder="What are you looking for?" />
            <img src={SearchIcon} />
          </div>
          <div className="header-icon-container">
            <img className="heart" src={Heart} />
            <img src={Profile} />
            <img src={Shopping} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
