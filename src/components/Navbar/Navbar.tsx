import "./Navbar.css";
// image
import Logo from "../../assets/logo.svg";

import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <header className="header">
        <div className="container">
          <nav>
            <ul role="list" className="Navlist">
              <li>
                <Link to={"/"} className="Link">
                  Services
                </Link>
              </li>
              <li>
                <Link to={"/Work"} className="Link">
                  Work
                </Link>
              </li>
              <li>
                <Link to={"/About"} className="Link">
                  About
                </Link>
              </li>
            </ul>
          </nav>

          <Link to={"/"}>
            <img
              src={Logo}
              loading="lazy"
              alt="Stories-By-SD Ltd"
              className="Logo"
            />
          </Link>

          <Link to={"/Contact"}>
            <button className="button">Get in touch</button>
          </Link>
        </div>
      </header>
    </>
  );
}
