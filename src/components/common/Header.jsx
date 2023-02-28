import React from "react";
import brandLogo from "../../assets/img/favicon.ico";
import menu from "../../assets/img/menu.png";
import "../../assets/css/style.css"
import { Link } from "react-router-dom"

const Header = () => {
  return (
    <>
      <header className="flex just-betw align-cntr">
        <div className="brand-logo">
          <Link to="/">
            <img src={brandLogo} alt="brand-logo" />
          </Link>
        </div>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/">Player</Link>
        </nav>
        <div className="widget">
          <img src={menu} alt="widget" />
        </div>
      </header>
    </>
  );
};

export default Header;
