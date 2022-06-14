import React, { useState, useRef, useEffect } from "react";
import { useGlobalContext } from "./context";

const Submenu = () => {
  const { isSubmenuOpen, location, text, page } = useGlobalContext();
  const { subMenuCenter: center, subMenuBottom: bottom } = location;
  const [column, setColumn] = useState("");
  const container = useRef(null);
  const { page: subPage, links } = page;

  useEffect(() => {
    setColumn("col-2");
    container.current.style.left = `${center}px`;
    container.current.style.top = `${bottom + 3}px`;
    if (links.length === 3) {
      setColumn("col-3");
    }
    if (links.length > 3) {
      setColumn("col-4");
    }
  }, [location]);

  return (
    <aside
      className={isSubmenuOpen ? "submenu show" : "submenu"}
      ref={container}
    >
      <h4>{subPage}</h4>
      <section className={`submenu-center ${column}`}>
        {links.map(({ label, icon, url }, index) => (
          <a key={index} href={url}>
            {icon}
            {label}
          </a>
        ))}
      </section>
    </aside>
  );
};

export default Submenu;
