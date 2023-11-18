import Checkbox from "./checkbox";

export default function WriteBar() {
  return (
    <>
      <article class="card card--input">
        <Checkbox />
        <input class="input" type="text" placeholder="Your to do item..." />
      </article>
    </>
  );
}
