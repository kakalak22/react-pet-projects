import React, { useState, useEffect } from "react";
import ShowList from "./showList";
import Alert from "./Alert";
import Form from "./Form";

const getLocalStorage = () => {
  const list = localStorage.getItem("list");
  return JSON.parse(list);
};

function App() {
  const [list, setList] = useState([]);
  const [input, setInput] = useState("");
  const [edit, setEdit] = useState({ isEdit: false, index: "" });
  const [alert, setAlert] = useState({ status: false, type: "", msg: "" });

  useEffect(() => {
    const list = getLocalStorage();
    list !== null ?
      setList(list) : setList([]);
  }, []);

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
    const { isEdit, index } = edit;
    if (isEdit) {
      if (input.trim().length > 0) {
        newList[index] = input;
        setList(newList);
        setInput("");
        setEdit({ isEdit: false, index: "" });
        showAlert(true, "success", "Edited");
        return;
      } else {
        showAlert(true, "danger", "Please input");
        setInput(list[index]);
        console.log(edit, list[index]);
        return;
      }
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
    setEdit({ isEdit: true, index: index });
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
          <Form onFormSubmit={handleSubmit} input={input} onInputChange={setInput} edit={edit} />
        </div>
        {list.length > 0 ? <ShowList list={list} onEdit={handleEdit} onDelete={handleDelete} onSet={setList} /> : <article className="grocery-container">

          <h3>Add something....</h3>
        </article>}
      </section>
    </main>
  );
}

export default App;
