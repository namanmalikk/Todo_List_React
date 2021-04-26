import { NavBar } from "./Components/navBar"
import { TodoForm } from "./Components/todoForm"
import { TodoList } from "./Components/todoList"
import React, { useState, useEffect } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  let initTodo = JSON.parse(localStorage.getItem("todos"))
  if (initTodo == null)
    initTodo = []
  console.log(initTodo)
  const [todos, settodos] = useState(initTodo)
  const deleteTodo = (e) => {
    settodos(todos.filter((t) => t !== e))
  }
  const addTodo = (title, content) => {
    let newTodo = {
      id: todos.length + 1,
      title: title,
      content: content
    };
    settodos([...todos, newTodo])
  }
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route exact path="/" render={() => {
          return (<>
            <TodoForm addTodo={addTodo} />
            <TodoList todos={todos} deleteTodo={deleteTodo} />
          </>)
        }}>
        </Route>
      </Switch>
    </Router >
  );
}

export default App;
