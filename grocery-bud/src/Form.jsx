import React from "react";

const Form = ({ onFormSubmit, onInputChange, input, edit }) => {
  return (
    <form className="form-control" onSubmit={onFormSubmit}>
      <input
        type="text"
        value={input}
        onChange={(event) => onInputChange(event.currentTarget.value)}
      />
      <button className="submit-btn" type="submit">
        {edit.isEdit ? "Edit" : "Submit"}
      </button>
    </form>
  );
};

export default Form;
