import React from "react";
import logo from "./images/logo.svg";
import { FaBars } from "react-icons/fa";
import { useGlobalContext } from "./context";
import sublinks from "./data";

const Navbar = () => {
  const { openSidebar, openSubmenu, closeSubmenu } = useGlobalContext();
  const displaySubmenu = (event) => {
    const { left, right, bottom } = event.target.getBoundingClientRect();
    const subMenuCenter = (left + right) / 2;
    const subMenuBottom = bottom + 3;
    const text = event.target.textContent;
    openSubmenu(text, { subMenuCenter, subMenuBottom });
  };

  const handleSubmenu = (event) => {
    const currentClass = event.target.classList;
    if (currentClass.contains("nav-center")) {
      closeSubmenu();
    }
  };

  return (
    <nav className="nav" onMouseOver={handleSubmenu}>
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} alt="" />
          <button className="btn toggle-btn" onClick={openSidebar}>
            <FaBars />
          </button>
        </div>
        <ul className="nav-links">
          {sublinks.map(({ page }, index) => (
            <li key={index}>
              <button className="link-btn" onMouseEnter={displaySubmenu}>
                {page}
              </button>
            </li>
          ))}
        </ul>
        <button className="btn signin-btn">Sign In</button>
      </div>
    </nav>
  );
};

export default Navbar;
