import Checkbox from "../checkbox";
import { isValid } from "./utils";

export default function WriteBar({
  isDone,
  placeHolder,
  value,
  onInputChange,
  onDoneChange,
  onTodoCreated,
}) {
  function handleTextChange(value) {
    onInputChange(value);
  }

  function handleDoneChange() {
    onDoneChange();
  }

  function handleKeyDown(e) {
    if (e.key !== "Enter") return;

    if (!isInputValid) return;

    onTodoCreated({
      text: value,
      isDone: isDone,
    });
    handleTextChange("");
  }
  const isInputValid = isValid(value);

  return (
    <>
      <p
        className={`validation-msg ${
          isInputValid ? "zero-opacity" : "full-opacity"
        }`}
      >
        Error: max length allowed is 32
      </p>
      <article
        className={`card card--input ${isInputValid ? "" : "invalid-shadow"}`}
      >
        <Checkbox isChecked={isDone} onClick={handleDoneChange} />
        <input
          className="input"
          type="text"
          value={value}
          placeholder={placeHolder}
          onChange={(e) => handleTextChange(e.target.value)}
          onKeyDown={handleKeyDown}
        />
      </article>
    </>
  );
}
