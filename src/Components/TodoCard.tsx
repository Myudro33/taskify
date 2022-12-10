import React from "react";
import "../App.css";
import { Todo } from "../models/todo.model";
import { BiPencil } from "react-icons/bi";
import { ImBin } from "react-icons/im";
import { MdDone } from "react-icons/md";
import Form from "react-bootstrap/esm/Form";

interface TodoProps {
  todo: Todo;
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TodoCard = ({ todo, todos, setTodos }: TodoProps) => {
  const [edit, setEdit] = React.useState<boolean>(false);
  const [todoName, settodoName] = React.useState<string>(todo.todo);
  const deleteTodo = () => {
    return setTodos(todos.filter((t) => t.id !== todo.id));
  };

  const completeTodo = () => {
    setTodos(
      todos.map((t) => {
        if (t.id === todo.id) {
          return { ...t, isCompleted: !t.isCompleted };
        }
        return t;
      })
    );
  };

  const changeTodoName = (e: string) => {
    settodoName(e);
  };

  return (
    <Form className="todo-card">
      {edit ? (
        <Form.Control
          style={{ width: "50%" }}
          type="text"
          value={todoName}
          onChange={(e) => changeTodoName(e.target.value)}
        />
      ) : (
        <h5 style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}>
          {todoName}
        </h5>
      )}
      <div>
        <BiPencil
          onClick={() => setEdit((prev) => !prev)}
          className="todo-icons"
        />
        <ImBin onClick={deleteTodo} className="todo-icons" />
        <MdDone onClick={completeTodo} className="todo-icons" />
      </div>
    </Form>
  );
};

export default TodoCard;
