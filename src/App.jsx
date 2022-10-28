import logo from "./logo.svg";
import "./App.css";
import Todo from "./components/Todo";
import React, { useState } from "react";

function App() {
  const [newTodo, setNewTodo] = useState("");
  const [todos, setTodos] = useState([]);

  const handelNewTodoSubmit = (event) => {
    event.preventDefault();

    if (newTodo.length === 0) {
      return;
    }
    const todoItem = {
      text: newTodo,
      complete: false,
    };
    setTodos([...todos, todoItem]);
    setNewTodo("");
  };
  const handleTodoDelete = (delIdx) => {
    const filteredTodos = todos.filter((todo, i) => {
      if (i !== delIdx){
        return todo;
      }
    });
    setTodos(filteredTodos);
  };

  const handleTogglecomplete = (idx) => {
    const updatedTodos = todos.map((todo, i) => {
      if (idx === i) {
        todo.complete = !todo.complete;
        return todo;
      }
    });
    setTodos(updatedTodos);
  };

  return (
    <div style={{ textAlign: "center" }}>
      <form
        onSubmit={(event) => {
          handelNewTodoSubmit(event);
        }}
      >
        <input
          onChange={(event) => {
            setNewTodo(event.target.value);
          }}
          type="text"
          value={newTodo}
        />
        <div>
          <button>Add</button>
        </div>
      </form>
      {todos.map((todo, i) => {
        return (
          <Todo
            key={i}
            i={i}
            todo={todo}
            handleTogglecomplete={handleTogglecomplete}
            handleTodoDelete={handleTodoDelete}
          />
        );
      })}
    </div>
  );
}

export default App;
