import React, { useState } from "react";
import "./App.css";
import Container from "react-bootstrap/esm/Container";
import Navbar from "react-bootstrap/esm/Navbar";
import { Input } from "./Components/Input";
import { Todo } from "./models/todo.model";
import TodoCard from "./Components/TodoCard";
import TodosContainer from "./Components/TodosContainer";


const App: React.FC = () => {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);
  const [completedTodos, setcompletedTodos] = useState<Todo[]>([]);

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    if (todo) {
      setTodos([
        ...todos,
        {
          id: Number(Math.random()),
          todo: todo,
          isCompleted: false,
        },
      ]);
    }
    setTodo("");
  };

  return (

      <div className="app">
        <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand>Taskify</Navbar.Brand>
          </Container>
        </Navbar>
        <Input todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
        <TodosContainer
          completedTodos={completedTodos}
          setcompletedTodos={setcompletedTodos}
          todos={todos}
          setTodos={setTodos}
        />
      </div>

  );
};

export default App;
