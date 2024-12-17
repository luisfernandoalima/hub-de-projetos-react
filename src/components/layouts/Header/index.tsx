import { Link } from "react-router-dom";

import { Navbar } from "../Navbar";

import imgLogo from "../../../assets/img/icons/LF-logo.png";
import './Header.scss'

export const Header = () => {
  return (
    <header className="flex justify-between items-center">
      <Link to={"/"}>
        <img src={imgLogo} alt="Logo" className="w-40" />
      </Link>
      <Navbar />
    </header>
  );
};
