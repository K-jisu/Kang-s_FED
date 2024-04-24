import { useState } from "react";
import "./App.css";

function App() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);

  const onChange = (e) => {
    setTodo(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (todo === "") {
      return;
    }
    setTodos((cur) => [todo, ...cur]);
    setTodo("");
  };
  console.log(todos);

  return (
    <>
      <h1>My To do ({todos.length}개)</h1>
      <form onSubmit={onSubmit}>
        <input
          value={todo}
          placeholder="write your todo"
          onChange={onChange}
          type="text"
        />
        <button>Submit</button>
      </form>
      <hr />
      <ul>
        {todos.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </>
  );
}

export default App;
