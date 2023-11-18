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
  return (
    <>
      <WriteBar
        isDone={isNewDone}
        placeHolder="Your todo item..."
        value={newText}
        onInputChange={handleInputChange}
        onDoneChange={handleDoneChange}
      />
      <TodoList
        items={todos}
        filterOption={filterOptions}
        onFilterChange={handleFilterChange}
        onTodoChecked={handleTodoChecked}
      />
    </>
  );
}
