import "./Navbar.css";
import { useState } from "react";
import { Link } from "react-router-dom";

import Logo from "../../assets/logo.svg";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOPen] = useState(false);
  return (
    <>
      <header className="header">
        <div className="container">
          <nav>
            <ul role="list" className={`Navlist ${isMenuOpen ? "active" : ""}`}>
              {" "}
              <li>
                <Link to={"/"} className="Link">
                  Services
                </Link>
              </li>
              <li>
                <Link to={"/work"} className="Link">
                  Work
                </Link>
              </li>
              <li>
                <Link to={"/about"} className="Link">
                  About
                </Link>
              </li>
              <li>
                <Link to={"/impact"} className="Link">
                  Impact
                </Link>
              </li>
              <li>
                <Link to={"/blog"} className="Link">
                  Blog
                </Link>
              </li>
              <li className="mobile_menu">
                <Link to="/contact">
                  <button className=" menu_btn">
                    <span>Get in touch</span>
                  </button>
                </Link>
              </li>
            </ul>
          </nav>

          <Link to={"/"}>
            <img src={Logo} alt="Stories-By-SD Ltd" className="Logo" />
          </Link>

          <Link to={"/contact"}>
            <button className="button btn">
              <span>Get in touch</span>
            </button>
          </Link>

          <div className="menu" onClick={() => setIsMenuOPen(!isMenuOpen)}>
            <i className="bx bx-menu"></i>
          </div>
        </div>
      </header>
    </>
  );
}
