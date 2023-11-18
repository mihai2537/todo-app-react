import TodoItem from "./todoItem";
import TodoFooter from "./todoFooter";
import TodoFilter from "./todoFilter";

export default function TodoList() {
  return (
    <>
      <ul className="items">
        <TodoItem></TodoItem>
        <TodoItem></TodoItem>
        <TodoItem></TodoItem>
        <TodoFooter></TodoFooter>
      </ul>
      <TodoFilter type={"mobile"}></TodoFilter>
    </>
  );
}
