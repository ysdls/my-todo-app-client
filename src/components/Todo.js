function Todo({ todo, deleteTodo }) {
  console.log(todo, deleteTodo);

  const deleteFunc = () => {
    console.log("first");
  };

  return (
    <div>
      <input
        type="checkbox"
        id={`todo-${todo.id}`}
        value={`todo-${todo.id}`}
        defaultChecked={todo.done}
      />
      <label htmlFor={`todo-${todo.id}`}>{todo.title}</label>
      <button onClick={deleteFunc}>DELETE</button>
    </div>
  );
}

export default Todo;
