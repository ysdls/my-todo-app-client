import { useState } from "react";

function AddTodo() {
  const [todo, setTodo] = useState("");

  return (
    <>
      <input
        type="text"
        placeholder="Add your new Tood"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button>ADD</button>
    </>
  );
}

export default AddTodo;
