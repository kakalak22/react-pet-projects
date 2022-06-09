import React, { useState } from "react";
import Menu from "./Menu";
import Categories from "./Categories";
import items from "./data";

function App() {
  const [menu, setMenu] = useState(items);
  const newArray = Array.from(items, (element) => element.category);
  const categories = ["All", ...new Set(newArray)];

  const handleFilter = (category) => {
    if (category === "All") {
      setMenu(items);
      return;
    }
    const filtered = items.filter((item) => item.category === category);
    setMenu(filtered);
  };

  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h1>Menu</h1>
          <div className="underline"></div>
        </div>
        <Categories categories={categories} onFilter={handleFilter} />
        <section className="section-center">
          {menu.map((item) => (
            <Menu key={item.id} {...item} />
          ))}
        </section>
      </section>
    </main>
  );
}

export default App;
