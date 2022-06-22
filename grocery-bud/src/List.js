import React from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
const List = ({ list, onEdit, onDelete }) => {
  return (
    <article className="grocery-container">
      {list.map((input, index) => (
        <div className="grocery-item" key={index}>
          <p className="title">{input}</p>
          <div>
            <button className="edit-btn" onClick={() => onEdit(input, index)}>
              <FaEdit />
            </button>
            <button className="delete-btn" onClick={() => onDelete(input)}>
              <FaTrash />
            </button>
          </div>
        </div>
      ))}
    </article>
  );
};

export default List;
