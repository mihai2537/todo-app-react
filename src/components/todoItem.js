import Checkbox from "./checkbox";
import iconCross from "../img/icon-cross.svg";

export default function TodoItem() {
  return (
    <li className="card card--item">
      <Checkbox />
      <p className="card-text card-text--crossed">
        Complete online JavaScript Course
      </p>
      <img className="icon-cross" src={iconCross} alt="x icon" />
    </li>
  );
}
