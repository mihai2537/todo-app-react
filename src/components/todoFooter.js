import TodoFilter from "./todoFilter";

export default function TodoFooter() {
  return (
    <>
      <li className="card card--footer">
        <p className="items-left">
          <span className="count-left">5</span> items left
        </p>
        <TodoFilter></TodoFilter>
        <button className="btn-text">Clear Completed</button>
      </li>
    </>
  );
}
