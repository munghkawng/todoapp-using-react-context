import "./App.css";
import Form from "./Form";
import List from "./List";
import { useState } from "react";
import { Context } from "./Context";

function App() {
  const [lists, setLists] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [editMode, setEditMode] = useState(false);
  const [editItem, setEditItem] = useState(null);

  function editHandler(id) {
    const newItem = lists.find((item) => {
      return item.id === id;
    });
    setEditMode(true);
    setInputValue(newItem.item);
    setEditItem(id);
  }

  function removeHandler(id) {
    setLists(() => lists.filter((list) => list.id !== id));
  }

  return (
    <Context.Provider
      value={{
        lists,
        removeHandler,
        inputValue,
        setInputValue,
        editHandler,
        editMode,
        setEditMode,
        setLists,
        editItem,
      }}
    >
      <h1>Content Api</h1>
      <Form />
      <List />
    </Context.Provider>
  );
}

export default App;
