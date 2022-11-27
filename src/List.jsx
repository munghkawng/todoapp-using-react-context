import { useContext } from "react";
import { Context } from "./Context";
function List() {
  const { lists, removeHandler, editHandler } = useContext(Context);

  return (
    <div>
      <ul>
        {lists.map((list) => {
          return (
            <li key={list.id}>
              {list.item}
              <button onClick={() => editHandler(list.id)}>Edit</button>
              <button onClick={() => removeHandler(list.id)}>Delete</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default List;
