import React, { useState } from "react";
import data from "./data";
import SingleQuestion from "./Question";
function App() {
  const questions = data;
  return (
    <main>
      <section className="container">
        <h3>Question and answers about login</h3>
        <div>
          {questions.map((question) => (
            <SingleQuestion key={question.id} {...question} />
          ))}
        </div>
      </section>
    </main>
  );
}

export default App;
