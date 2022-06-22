import React from "react";
// import pages
import Home from "./pages/Home";
import About from "./pages/About";
import SingleCocktail from "./pages/SingleCocktail";
import { Route, Routes, useLocation } from "react-router-dom";
import Error from "./pages/Error";
// import components
import Navbar from "./components/Navbar";
function App() {
  const location = useLocation();
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path='id'>
            <Route path=":drinkId" element={<SingleCocktail />} />
          </Route>
        </Route>
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;
