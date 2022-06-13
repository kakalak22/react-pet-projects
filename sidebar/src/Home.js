import React, { useContext } from "react";
import { FaBars } from "react-icons/fa";
import { AppContext, useGlobalContext } from "./context";
const Home = () => {
  const { openModal, openSidebar, isSidebarOpen } = useGlobalContext(); // custom hook
  //const data = useContext(AppContext);
  return (
    <main>
      {!isSidebarOpen && (
        <button className="sidebar-toggle" onClick={openSidebar}>
          <FaBars />
        </button>
      )}
      <button className="btn" onClick={openModal}>
        Show Modal
      </button>
    </main>
  );
};

export default Home;
