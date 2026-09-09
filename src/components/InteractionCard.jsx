export default function InteracionCard({ title }) {

  function handleChange(event) {
    console.log("Eingabe: ", event.target.value);
  }

  function handleClick() {
    console.log("Button geklickt");
  }

  function handleMouseEnter() {
    console.log("Mouse enter");
  }

  function handleMouseLeave() {
    console.log("Mouse leave");
  }

  function handleFocus(event) {
    console.log(event.target.type, "Hab den Fokus 😁");
  }

  function handleBlur(event) {
    console.log(event.target.type, "Hab ihn wieder verloren... 😒");
  }

  return (
    <article
      className="interaction-card"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <h2>{title}</h2>

      <input
        type="text"
        onChange={handleChange}
      />

      <button type="button" onClick={handleClick}>
        Aktion
      </button>

      <button
        type="button"
        onFocus={handleFocus}
        onBlur={handleBlur}
      >
        zweite Aktion
      </button>
    </article>
  );
}