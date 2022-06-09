import React, { useState } from "react";
import data from "./data";
function App() {
  const [paragraphs, setParagraphs] = useState([]);
  const [num, setNum] = useState(0);

  const handleChange = (event) => {
    let num = event.target.value;
    if (num <= 0) num = 1;
    if (num > 9) num = 9;
    setNum(num);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const paragraphs = data.slice(0, num);
    setParagraphs(paragraphs);
  };

  return (
    <main className="section">
      <section className="section-center">
        <h3>Lorm dipsum Generator</h3>
        <form className="lorem-form" onSubmit={handleSubmit}>
          <label>
            Paragraphs:{" "}
            <input type="number" onChange={handleChange} className="input" />
          </label>
          <button type="submit" className="btn">
            Generate
          </button>
        </form>
        {paragraphs.map((para, index) => (
          <p key={index} className="result">
            {para}
          </p>
        ))}
      </section>
    </main>
  );
}

export default App;
