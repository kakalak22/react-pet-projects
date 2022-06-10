import React, { useState, useEffect } from "react";
import List from "./List";
import Alert from "./Alert";

const getLocalStorage = () => {
  const list = localStorage.getItem("list");
  return JSON.parse(list);
};

function App() {
  const [list, setList] = useState(getLocalStorage());
  const [input, setInput] = useState("");
  const [editIndex, setEditIndex] = useState();
  const [alert, setAlert] = useState({ status: false, type: "", msg: "" });

  useEffect(() => {
    const jsonList = JSON.stringify(list);
    localStorage.setItem("list", jsonList);
  }, [list]);

  const showAlert = (status = false, type = "", msg = "") => {
    setAlert({ status, type, msg });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newList = [...list];
    if (editIndex) {
      newList[editIndex] = input;
      setList(newList);
      setInput("");
      setEditIndex("");
      showAlert(true, "success", "Edited");
      return;
    }

    if (input.trim().length > 0) {
      newList.push(input);
      setList(newList);
      setInput("");
      showAlert(true, "success", "Success");
      return;
    }

    showAlert(true, "danger", "Please input");
    setInput("");
  };

  const handleEdit = (input, index) => {
    setEditIndex(index);
    setInput(input);
  };

  const handleDelete = (input) => {
    const newList = list.filter((i) => i !== input);
    showAlert(true, "danger", "Deleted");
    setList(newList);
  };

  return (
    <main className="section">
      <section className="section-center">
        <Alert alert={alert} showAlert={showAlert} />
        <div className="grocery-form">
          <h3>Grocery Bud</h3>
          <form className="form-control" onSubmit={handleSubmit}>
            <input
              type="text"
              value={input}
              onChange={(event) => setInput(event.currentTarget.value)}
            />
            <button className="submit-btn" type="submit">
              {editIndex ? "Edit" : "Submit"}
            </button>
          </form>
        </div>
        <List list={list} onEdit={handleEdit} onDelete={handleDelete} />
        {list.length > 0 && (
          <button className="clear-btn" onClick={() => setList([])}>
            Clear all
          </button>
        )}
      </section>
    </main>
  );
}

export default App;
