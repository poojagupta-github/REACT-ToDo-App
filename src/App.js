import logo from './logo.svg';
import './App.css';
import Header from "./My components/Header";
import { Todos } from "./My components/Todos";
import { Footer } from "./My components/Footer";
import { AddTodo } from "./My components/AddTodo";
// import {TodoItem} from "../My components/TodoItem";
import React, { useState } from 'react';


function App() {
  let initTodo;
  if (localStorage.getItem("todos")===null) {
    initTodo = [];
  }
  else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }

  const onDelete = (obj2) => {
    console.log("i am ondelete", obj2);

    setTodos(todos.filter((e) => {
      return e !== obj2;
    }));
    localStorage.setItem("todos", JSON.stringify(todos));
  }

  const addTodo = (title, desc) => {
    let sno;
    if (todos.length == 0) {
      sno = 1;
    }
    else {
      sno = todos[todos.length - 1].sno + 1;
    }

    const newTodo = {
      sno: sno,
      title: title,
      desc: desc,
    }
    setTodos([...todos, newTodo]);
    console.log(newTodo);


    localStorage.setItem("todos", JSON.stringify(todos))

  }
  const [todos, setTodos] = useState(initTodo);

  return (
    <>
      <Header title="My Todos List" searchbar={true} />
      <AddTodo addTodo={addTodo} />
      <Todos todos={todos} onDelete={onDelete} />
      <Footer />
    </>


  );
}

export default App;
