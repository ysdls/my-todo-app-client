import { useEffect, useRef, useState } from "react";
import Todo from "./components/Todo";
import AddTodo from "./components/AddTodo";
import axios from "axios";
import { SERVER } from "./lib/config";

function App() {
  const [todo, setTodo] = useState([]);

  useEffect(() => {
    const getTodos = async () => {
      const res = await axios.get(`${SERVER}/todos`);
      console.log(res.data.data);
      setTodo(res.data.data);
    };
    getTodos();
  }, []);
  //input값
  const [addTodo, setAddTodo] = useState("");
  //readonly
  const [readonly, setReadonly] = useState(true);
  //todo 추가함수
  const addTodoFunc = async () => {
    const newData = {
      // id: todo.length + 1,
      title: addTodo,
      // done: false,
    };
    const serverData = await axios.post(`${SERVER}/todo`, newData);
    console.log(serverData.data);
    setTodo([...todo, serverData.data.data]);
    setAddTodo("");
  };

  //todo 삭제함수
  const deleteTodoFunc = (value) => {
    console.log(value);
    const newTodo = todo.filter((item) => item.id !== value);
    setTodo(newTodo);
  };

  //readonly false => true
  const falseFunc = () => {
    setReadonly(false);
  };

  // const editTodoFunc = (id, event) => {
  //   console.log(id, event);

  //   // console.log(this,id, value);
  //   const data = todo;

  //   // // console.log(title);
  //   setTodo([...todo]);
  // };

  return (
    <>
      <div>MY TODO</div>
      <input
        type="text"
        placeholder="Add your new Todo"
        value={addTodo}
        onChange={(e) => setAddTodo(e.target.value)}
      />
      <button onClick={addTodoFunc}>ADD</button>
      {todo.map((value) => {
        return (
          <div key={value.id}>
            <input
              type="checkbox"
              id={`todo-${value.id}`}
              value={`todo-${value.id}`}
              defaultChecked={value.done}
            />
            {/* <label htmlFor={`todo-${value.id}`}>{value.title}</label> */}
            <input
              type="text"
              value={value.title}
              readOnly={readonly}
              onClick={falseFunc}
              // onChange={(e) => editTodoFunc(value.id, e.target)}
            />
            <button onClick={() => deleteTodoFunc(value.id)}>DELETE</button>
          </div>
        );
      })}
    </>
  );
}

export default App;
