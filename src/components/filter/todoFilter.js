export default function TodoFilter({
  type,
  btnPressed: { isAll, isActive, isCompleted },
  onFilterChange,
}) {
  const filterClass = type === "mobile" ? "card filter-mobile" : "filter";

  return (
    <article className={filterClass}>
      <button
        onClick={() => onFilterChange({ isAll: true })}
        className={`btn-text ${isAll && "filter--active"}`}
      >
        All
      </button>
      <button
        onClick={() => onFilterChange({ isActive: true })}
        className={`btn-text ${isActive && "filter--active"}`}
      >
        Active
      </button>
      <button
        onClick={() => onFilterChange({ isCompleted: true })}
        className={`btn-text ${isCompleted && "filter--active"}`}
      >
        Completed
      </button>
    </article>
  );
}
