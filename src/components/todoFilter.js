export default function TodoFilter({ type }) {
  const filterClass = type === "mobile" ? "card filter-mobile" : "filter";

  return (
    <article className={filterClass}>
      <button className="btn-text filter--active">All</button>
      <button className="btn-text">Active</button>
      <button className="btn-text">Completed</button>
    </article>
  );
}
