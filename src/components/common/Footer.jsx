import React from "react";
import { Link } from "react-router-dom";
import "../../assets/css/style.css";
import brandLogo from "../../assets/img/favicon.ico";


const Footer = () => {
  return (
    <>
      <footer>
        <Link to="/">
          <img src={brandLogo} alt="Logo" />
          <p>2023 &copy; Tech IS Music Player</p>
        </Link>
      </footer>
    </>
  );
};

export default Footer;
