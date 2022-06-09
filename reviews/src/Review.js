import React, { useState } from "react";
import people from "./data";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";

const Review = () => {
  const [index, setIndex] = useState(0);
  const { name, text, image, job, id } = people[index];

  const getRandomInt = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
  };

  const nextPerson = () => {
    if (index === people.length - 1) {
      setIndex(0);
      return;
    }
    setIndex(index + 1);
  };

  const prevPerson = () => {
    if (index === 0) {
      setIndex(people.length - 1);
      return;
    }
    setIndex(index - 1);
  };

  const randomPerson = () => {
    const index = getRandomInt(0, people.length);
    setIndex(index);
  };

  return (
    <article className="review">
      <div className="img-container">
        <img src={image} alt={name} className="person-img" />
        <span className="quote-icon">
          <FaQuoteRight />
        </span>
      </div>
      <h4 className="author">{name}</h4>
      <p className="job">{job}</p>
      <p className="info">{text}</p>
      <div className="button-container">
        <button className="prev-btn">
          <FaChevronLeft onClick={prevPerson} />
        </button>
        <button className="next-btn">
          <FaChevronRight onClick={nextPerson} />
        </button>
      </div>
      <button className="random-btn" onClick={randomPerson}>
        Surprise me
      </button>
    </article>
  );
};

export default Review;
