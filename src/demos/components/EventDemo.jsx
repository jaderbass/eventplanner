function EventDemo() {
  function handleClick(event) {
    console.log(event.target.value);
  }

  function handleSelect(title) {
    console.log(`Ausgewählt: ${title}`);

  }

  function handleChange(event) {
    console.log(event.target.value);
  }

  return (
    <div>
      <input type="text" onChange={handleChange} /><br />

      <button value="Button 1" onClick={handleClick}>
        Klick mich der Erste!
      </button><br />
      <button value="Button 2" onClick={handleClick}>
        Klick mich der Zweite!
      </button>
    </div>

    // <button onClick={() => handleSelect("React Workshop")}>
    //   Klick mich!
    // </button>
  );
}

export default EventDemo;