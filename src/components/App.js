import React, { useState, useMemo } from "react";
import ReactMemo from "./ReactMemo";
import "../styles/App.css";

function App() {
  const [counter, setCounter] = useState(0);
  const [todos, setTodos] = useState([]);

  const increaseCounter = () => {
    setCounter((prevCounter) => prevCounter + 1);
  };

  const addTodo = () => {
    setTodos((prevTodos) => [...prevTodos, "New Todo"]);
  };

  const expensiveCalculation = useMemo(() => {
    let num = 0;
    for (let i = 0; i < 1000000000; i++) {
      num += 1;
    }
    return num;
  }, []);

  return (
    <div>
      <h1>React.useMemo</h1>

      <h2>My todos</h2>
      {todos.map((todo, index) => (
        <p key={index}>{todo}</p>
      ))}
      <button onClick={addTodo}>Add Todo</button>

      <hr />

      <span>Count: {counter}</span>
      <button onClick={increaseCounter}>+</button>

      <h2>Expensive Calculation</h2>
      <p>{expensiveCalculation}</p>

      <hr />

      <ReactMemo />
    </div>
  );
}

export default App;
