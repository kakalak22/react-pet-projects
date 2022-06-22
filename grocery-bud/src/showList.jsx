import React from "react";
import List from "./List";

const ShowList = ({ list, onEdit, onDelete, onSet }) => {
  return (
    <React.Fragment>
      <List list={list} onEdit={onEdit} onDelete={onDelete} />
      {list.length > 0 && (
        <button className="clear-btn" onClick={() => onSet([])}>
          Clear all
        </button>
      )}
    </React.Fragment>
  );
};

export default ShowList;
