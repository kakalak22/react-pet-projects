import React from "react";
import logo from "./logo.svg";
import { FaTimes } from "react-icons/fa";
import { social, links } from "./data";
import { useGlobalContext } from "./context";

const Sidebar = () => {
  const { isSidebarOpen, closeSidebar } = useGlobalContext();
  return (
    <div className={isSidebarOpen ? "sidebar show-sidebar" : "sidebar"}>
      <div className="sidebar-header">
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
        <button className="close-btn" onClick={closeSidebar}>
          <FaTimes />
        </button>
      </div>
      <div className="links">
        <ul>
          {links.map(({ id, url, icon, text }) => (
            <li key={id}>
              <a href={url}>
                {icon}
                {text}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="social-icons">
        {social.map(({ id, url, icon }) => (
          <a key={id} href={url}>
            {icon}
          </a>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
