import React, { useState } from "react";
import SingleColor from "./SingleColor";

import Values from "values.js";

function App() {
  const [list, setList] = useState(new Values("#1A308E").all(10));
  const [color, setColor] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    try {
      const newList = new Values(color).all(10);
      setList(newList);
      setError(false);
    } catch (error) {
      setError(true);
      console.log(error);
    }
  };

  return (
    <main>
      <section className="container">
        <h3>Color Generator</h3>
        <form onSubmit={handleSubmit}>
          <input
            placeholder="#1A308E"
            type="text"
            onChange={(event) => setColor(event.currentTarget.value)}
            className={error ? "error" : null}
          />
          <button type="submit" className="btn">
            Submit
          </button>
        </form>
      </section>
      <div className="colors">
        {list.map((color, index) => (
          <SingleColor key={index} color={color} index={index} />
        ))}
      </div>
    </main>
  );
}

export default App;
