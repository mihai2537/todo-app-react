import TodoItem from "./todoItem";
import TodoFooter from "./todoFooter";
import TodoFilter from "./filter/todoFilter";
import { filterItems } from "./filter/utils";

export default function TodoList({
  items,
  filterOption,
  onFilterChange,
  onTodoChecked,
}) {
  const filteredItems = filterItems(items, filterOption);

  const todos = filteredItems.map((item) => {
    return (
      <TodoItem
        key={item.id}
        isDone={item.isDone}
        text={item.text}
        onCheckClicked={() => onTodoChecked(item.id)}
      />
    );
  });

  const itemsLeft = items.filter((item) => !item.isDone).length;

  return (
    <>
      <ul className="items">
        {todos}
        <TodoFooter
          key={0}
          itemsLeft={itemsLeft}
          filterOption={filterOption}
          onFilterChange={onFilterChange}
        ></TodoFooter>
      </ul>
      <TodoFilter
        type={"mobile"}
        btnPressed={filterOption}
        onFilterChange={onFilterChange}
      ></TodoFilter>
    </>
  );
}
