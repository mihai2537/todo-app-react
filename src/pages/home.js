import WriteBar from "../components/writeBar";
import TodoList from "../components/todoList";
import { useState } from "react";
import todosFromAPI from "../data";

export default function Home() {
  let [todos, setTodos] = useState(todosFromAPI);
  let [newText, setNewText] = useState("");
  let [isNewDone, setIsNewDone] = useState(false);
  let [filterOptions, setFilterOptions] = useState({
    isAll: true,
    isActive: false,
    isCompleted: false,
  });

  function handleInputChange(text) {
    setNewText(text);
  }

  function handleDoneChange() {
    setIsNewDone(!isNewDone);
  }

  function handleFilterChange(filterConfig) {
    setFilterOptions(filterConfig);
  }

  function handleTodoChecked(id) {
    const newTodos = todos.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          isDone: !todo.isDone,
        };
      }
      return todo;
    });
    setTodos(newTodos);
  }

  function handleTodoDeleted(id) {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  }

  function handleTodoCreated(item) {
    let id = 1;
    let ids = null;
    if (todos.length !== 0) {
      ids = todos.map((todo) => todo.id).sort((a, b) => b - a);
      id = ids[0] + 1;
    }
    item.id = id;
    console.log("New todo created: " + item.id);
    setTodos([...todos, item]);
  }

  function handleClearCompleted() {
    const newTodos = todos.filter((todo) => !todo.isDone);
    setTodos(newTodos);
  }

  return (
    <>
      <WriteBar
        isDone={isNewDone}
        placeHolder="Your todo item..."
        value={newText}
        onInputChange={handleInputChange}
        onDoneChange={handleDoneChange}
        onTodoCreated={handleTodoCreated}
      />
      <TodoList
        items={todos}
        filterOption={filterOptions}
        onFilterChange={handleFilterChange}
        onTodoChecked={handleTodoChecked}
        onTodoDeleted={handleTodoDeleted}
        onClearCompleted={handleClearCompleted}
      />
    </>
  );
}
