import React from "react";
import { Todo } from "../models/todo.model";
import TodoCard from "./TodoCard";
import "../App.css";

interface PropsTodos {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
  completedTodos: Todo[];
  setcompletedTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TodosContainer = ({
  todos,
  setTodos,
  completedTodos,
  setcompletedTodos,
}: PropsTodos) => {
  return (
    <div className="contain">
      <div className="todos todo">
        <span className="todos__heading">Active Tasks</span>
        {todos.map((todo) => (
          <TodoCard
            todo={todo}
            todos={todos}
            setTodos={setTodos}
            key={todo.id}
          />
        ))}
      </div>
    </div>
  );
};

export default TodosContainer;
