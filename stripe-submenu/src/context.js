import React, { useState, useContext, createContext } from "react";
import sublinks from "./data";

const Appcontext = createContext();
export const AppProvider = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);
  const [location, setLocation] = useState({});
  const [page, setPage] = useState({ page: '', links: [] });

  const openSidebar = () => {
    setIsSidebarOpen(true);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  const openSubmenu = (text, coordinates) => {
    const page = sublinks.find((link) => link.page === text);
    setPage(page);
    setLocation(coordinates);
    setIsSubmenuOpen(true);
  };

  const closeSubmenu = () => {
    setIsSubmenuOpen(false);
  };

  const obj = {
    isSidebarOpen,
    isSubmenuOpen,
    location,
    page,
    openSidebar,
    closeSidebar,
    openSubmenu,
    closeSubmenu,
  };

  return <Appcontext.Provider value={obj}>{children}</Appcontext.Provider>;
};

export const useGlobalContext = () => {
  return useContext(Appcontext);
};
