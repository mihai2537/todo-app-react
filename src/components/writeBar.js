import Checkbox from "./checkbox";

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

    onTodoCreated({
      text: value,
      isDone: isDone,
    });
    handleTextChange("");
  }

  return (
    <>
      <article className="card card--input">
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
