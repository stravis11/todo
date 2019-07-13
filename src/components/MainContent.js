import React from "react";
import ToDoItem from "./ToDoItem";

const MainContent = () => {
  return (
    <div className="todo-list">
      <ToDoItem />
      <ToDoItem />
      <ToDoItem />
      <ToDoItem />
    </div>
  );
};

export default MainContent;
