import React, { useState, useEffect } from "react";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import { FaQuoteRight } from "react-icons/fa";
import data from "./data";
function App() {
  const [index, setIndex] = useState(0);
  const [reviews, setReviews] = useState(data);

  const nextIndex = () => {
    if (index === data.length - 1) {
      setIndex(0);
      return;
    }
    setIndex(index + 1);
  };

  const prevIndex = () => {
    if (index === 0) {
      setIndex(data.length - 1);
      return;
    }
    setIndex(index - 1);
  };

  useEffect(() => {
    let slider = setInterval(() => {
      nextIndex(index + 1);
    }, 10000);
    return () => {
      console.log("clearr");
      clearInterval(slider);
    };
  }, [index]);

  const position = (currentIndex) => {
    let position = "nextSlide";
    if (currentIndex === index) {
      position = "activeSlide";
    }
    if (
      currentIndex === index - 1 ||
      (index === 0 && currentIndex === reviews.length - 1)
    ) {
      position = "lastSlide";
    }
    return position;
  };

  return (
    <main>
      <section className="section">
        <div className="title">
          <h2>
            <span>/</span>Reviews
          </h2>
        </div>
        <div className="section-center">
          {reviews.map((review, index) => (
            <article key={review.id} className={position(index)}>
              <div className="title">
                <img
                  src={review.image}
                  alt={review.name}
                  className="person-img"
                />
                <h4>{review.name}</h4>
                <p className="text">{review.quote}</p>
                <FaQuoteRight className="icon" />
              </div>
            </article>
          ))}
          <FiChevronLeft className="prev" onClick={prevIndex} />
          <FiChevronRight className="next" onClick={nextIndex} />
        </div>
      </section>
    </main>
  );
}

export default App;
