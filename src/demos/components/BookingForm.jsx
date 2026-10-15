import { useState } from "react";

function BookingForm() {

  /* ? Diese einzelnen States der Fromular-Elemente ... */
  // const [name, setName] = useState("");
  // const [email, setEmail] = useState("");
  // const [participants, setParticipants] = useState(1);
  // const [phone, setPhone] = useState("");

  /* ? ... werden durch diesen einen State ersetzt */
  const [formData, setFormData] =
    useState({
      name: "",
      email: "",
      phone: "",
      participants: 1
    });

  /* ? Die Error- und Success-States bleiben einzeln bestehen */
  const [error, setError] = useState("");
  const [successBooking, setSuccessBooking] = useState(null);

  /* ? Mit diesem Eventhandler ersetzen wir die Arrow-Funktionen an den einzelnen Formularfeldern. Diese referenzieren dann alle auf diesen Eventhandler. */
  function handleChange(event) {
    const {
      name,
      value
    } = event.target;

    setFormData({
      ...formData,
      [name]: value
    });
  }


  function handleSubmit(event) {
    event.preventDefault(); // Standard-Ereignisbehandlung deaktivieren

    setError("");
    setSuccessBooking(null);

    /* ? Die State-Namen müssen durch die Objekt-Eigenschaften ersetzt werden.
    aus 
    name.trim() === ""

    wird
    formData.name.trim() === ""

    usw.
    */

    if (formData.name.trim() === "") {
      setError("Bitte geben Sie einen Namen ein!");
      return;
    }

    if (formData.email.trim() === "") {
      setError("Bitte geben Sie eine E-Mail-Adresse ein!");
      return;
    }

    if (!formData.email.includes("@")) {
      setError("Bitte geben Sie eine gültige E.Mail-Adresse ein!");
      return;
    }

    if (formData.phone.trim() !== "" && formData.phone.trim().length < 5) {
      setError("Die Telefonnummer ist zu kurz.");
      return;
    }

    if (formData.participants < 1) {
      setError("Es muss mindestens eine Person angemeldet werden!");
      return;
    }

    setSuccessBooking({
      name: formData.name,
      participants: formData.participants
    });

    /* ? Auch die State-Resets müssen durch eine einzelne Setter-Funktion ersetzt werden. */
    // setName("");
    // setEmail("");
    // setPhone("");
    // setParticipants(1);

    setFormData({
      name: "",
      email: "",
      phone: "",
      participants: 1
    });

    console.log({ formData });

  }

  return (
    <section>
      {error && (
        <p className="form-error">{error}</p>
      )}

      {successBooking && (
        <p className="form-success">
          Vielen Dank
          {" "}
          <strong>
            {successBooking.name}
          </strong>
          !
          {" "}
          Die Buchung für
          {" "}
          {successBooking.participants}
          {" "}
          Person(en) wurde gespeichert.
        </p>
      )}

      <form onSubmit={handleSubmit} noValidate>

        <div>
          <label htmlFor="name">Name*</label>{" "}
          {/* ? An den Formularfeldern muss das name-Attribut gesetzt, die State-Variablen auf das formData-Objekt und die onChange-Arrow-Funktion auf eine Funktionsreferenz geändert werden. */}
          <input
            type="text"
            name="name"
            id="name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>

        <div>
          <label htmlFor="email">Email*</label>{" "}
          <input
            type="email"
            name="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>

        <div>
          <label htmlFor="phone">Telefon</label>{" "}
          <input
            type="tel"
            name="phone"
            id="phone"
            value={formData.phone}
            onChange={handleChange}
          />
        </div>

        <div>
          <label htmlFor="participants">Teilnehmer*</label>{" "}
          <input
            type="number"
            name="participants"
            id="participants"
            value={formData.participants}
            onChange={handleChange}
          />
        </div>

        <button type="submit">
          Buchen
        </button>

      </form>
    </section>
  );
}

export default BookingForm;