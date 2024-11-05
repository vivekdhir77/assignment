import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, updateTodo, setTodo } from "./todosReducer";

export default function TodoForm() {
  const { todo } = useSelector((state: any) => state.todosReducer);
  const dispatch = useDispatch();
  return (
    <li className="list-group-item d-flex align-items-center gap-2">
      <input
        value={todo.title}
        onChange={(e) => dispatch(setTodo({ ...todo, title: e.target.value }))}
      />
      <div className="ms-auto d-flex gap-2">
        <button
          className="btn btn-warning"
          onClick={() => dispatch(updateTodo(todo))}
          id="wd-update-todo-click"
        >
          {" "}
          Update{" "}
        </button>
        <button
          className="btn btn-success"
          onClick={() => dispatch(addTodo(todo))}
          id="wd-add-todo-click"
        >
          {" "}
          Add{" "}
        </button>
      </div>
    </li>
  );
}