import Checkbox from "./checkbox";
import iconCross from "../img/icon-cross.svg";

export default function TodoItem({ isDone, text, onCheckClicked }) {
  let textClass = "card-text";
  isDone && (textClass += " card-text--crossed");

  return (
    <li className="card card--item">
      <Checkbox isChecked={isDone} onClick={onCheckClicked} />
      <p className={textClass}>{text}</p>
      <img className="icon-cross" src={iconCross} alt="x icon" />
    </li>
  );
}
