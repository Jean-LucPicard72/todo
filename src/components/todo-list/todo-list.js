import React, { Component } from "react";

import TodoListItem from "../todo-list-item";
import "./todo-list.css";

const TodoList = ({ todos, onDeleted }) => {
  const elements = todos.map(({ ...item }) => {
    const { id, ...itemProps } = item;
    return (
      <li key={id} className="list-group-item">
        <TodoListItem {...itemProps} onDeleted={() => onDeleted(id)} />
      </li>
    );
  });
  return (
    <span>
      <ul className="list-group todo-list">{elements}</ul>
    </span>
  );
};

export default TodoList;
