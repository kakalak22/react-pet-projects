import React from "react";
import { FaTimes } from "react-icons/fa";
import sublinks from "./data";
import { useGlobalContext } from "./context";

const Sidebar = () => {
  const { closeSidebar, isSidebarOpen } = useGlobalContext();
  return (
    <aside
      className={isSidebarOpen ? "sidebar-wrapper show" : "sidebar-wrapper"}
    >
      <div className="sidebar">
        <button className="close-btn" onClick={closeSidebar}>
          <FaTimes />
        </button>
        {sublinks.map(({ page, links }, index) => (
          <article key={index}>
            <h4>{page}</h4>
            <ul className="sidebar-sublinks">
              {links.map(({ label, icon, url }, index) => (
                <li key={index}>
                  <a href={url}>
                    {icon}
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </aside>
  );
};

export default Sidebar;