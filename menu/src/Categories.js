import React from 'react';

const Categories = ({ categories, onFilter }) => {
  return <div className="btn-container">
    {categories.map((cate, index) => (
      <button key={index} className="filter-btn" onClick={() => onFilter(cate)}>
        {cate}
      </button>
    ))}
  </div>;
};

export default Categories;
