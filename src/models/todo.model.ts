export interface Todo {
  id: number;
  todo: string;
  isCompleted: boolean;
}

// type Actions =
//   | { type: "add"; payload: string }
//   | { type: "remove"; payload: number }
//   | { type: "done"; payload: number };

// const TodoReducer = (state: Todo[], action:Actions) => {};

// import { useReducer } from "react";
// const ReducerExample = () => {
//   const [state, dispatch] = useReducer(TodoReducer, []);
// };
