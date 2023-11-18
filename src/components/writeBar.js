import Checkbox from "./checkbox";

export default function WriteBar({
  isDone,
  placeHolder,
  value,
  onInputChange,
  onDoneChange,
}) {
  function handleTextChange(e) {
    onInputChange(e.target.value);
  }

  function handleDoneChange() {
    onDoneChange();
  }

  return (
    <>
      <article className="card card--input">
        <Checkbox isChecked={isDone} onClick={handleDoneChange} />
        <input
          className="input"
          type="text"
          placeholder={placeHolder}
          onChange={handleTextChange}
        />
      </article>
    </>
  );
}
