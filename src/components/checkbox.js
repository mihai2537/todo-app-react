export default function Checkbox({ isChecked, onClick }) {
  return (
    <>
      <div
        onClick={onClick}
        className={`checkbox-wrap ${isChecked ? "checkbox--active" : ""}`}
      >
        <div className="checkbox">
          <svg
            className="checkbox-icon"
            xmlns="http://www.w3.org/2000/svg"
            width={11}
            height={9}
          >
            <path
              fill="none"
              stroke="#FFF"
              strokeWidth={2}
              d="M1 4.304L3.696 7l6-6"
            />
          </svg>
        </div>
      </div>
    </>
  );
}
