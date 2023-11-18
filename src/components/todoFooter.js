import TodoFilter from "./filter/todoFilter";

export default function TodoFooter({
  itemsLeft,
  filterOption,
  onFilterChange,
}) {
  return (
    <>
      <li className="card card--footer">
        <p className="items-left">
          <span className="count-left">{itemsLeft}</span> items left
        </p>
        <TodoFilter
          btnPressed={filterOption}
          onFilterChange={onFilterChange}
        ></TodoFilter>
        <button className="btn-text">Clear Completed</button>
      </li>
    </>
  );
}
