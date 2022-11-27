import { useContext } from "react";
import { Context } from "./Context";
function Form() {
  const {
    editMode,
    inputValue,
    lists,
    setInputValue,
    setEditMode,
    setLists,
    editItem,
  } = useContext(Context);

  function submitHandler(e) {
    e.preventDefault();
    if (!inputValue.trim() || inputValue.length === 0) {
      alert("Plase Enter Value");
    } else {
      setLists([...lists, { id: Math.random().toString(), item: inputValue }]);
      setInputValue("");
    }
  }

  function editSubmitHandler(e) {
    e.preventDefault();

    setLists(
      lists.map((name) => {
        if (name.id === editItem) {
          return { ...name, item: inputValue };
        }

        return name;
      })
    );
    setEditMode(false);
    setInputValue("");
  }

  function cancelButton() {
    setEditMode(false);
    setInputValue("");
  }

  return (
    <div>
      {editMode ? (
        <form onSubmit={editSubmitHandler}>
          <input
            className="form-control"
            type="text"
            placeholder="Enter Your List"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />

          <button className="form-control" type="submit">
            update
          </button>
          <button className="form-control" onClick={cancelButton}>
            Cancel
          </button>
        </form>
      ) : (
        <form onSubmit={submitHandler}>
          <input
            className="form-control"
            type="text"
            placeholder="Enter Your List"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />

          <button className="form-control" type="submit">
            Add Item
          </button>
        </form>
      )}
    </div>
  );
}

export default Form;
