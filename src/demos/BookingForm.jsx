import { useState } from "react";

export default function BookingForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    participants: 1,
    course: "",
    date: "",
    company: "",
    notes: "",
    newsletter: false
  });

  const [error, setError] = useState("");
  const [successBooking, setSuccessBooking] = useState(null);

  function handleChange(event) {
    setSuccessBooking(null);
    const {
      name,
      value,
      type,
      checked
    } = event.target;

    let newValue = value;

    if (type === "checkbox") {
      newValue = checked;
    }

    if (type === "number") {
      newValue = Number(value);
    }

    setFormData({
      ...formData,
      [name]: newValue
    });
  }

  function handleSubmit(event) {
    event.preventDefault();

    // setSuccessMessage("");
    setSuccessBooking(null);


    if (formData.name.trim().length < 3) {
      setError("Bitte einen Namen mit mindestens 3 Zeichen eingeben!");
      return;
    }

    if (formData.email.trim() === "") {
      setError("Bitte eine E-Mail-Adresse eingeben!");
      return;
    }

    if (formData.participants < 1) {
      setError("Die Teilnehmerzahl muss mindestens 1 betragen!");
      return;
    }

    if (formData.course === "") {
      setError("Bitte einen Kurs auswählen!");
      return;
    }

    setError("");

    console.log(formData, successBooking);

    const courseLabels = {
      html: "HTML & CSS",
      javascript: "JavaScript",
      react: "React"
    }

    // setSuccessMessage(`Die Buchung für <b>${name}</b> im Kurs <b>${courseLabels[course]}</b> wurde erfasst.`);

    setSuccessBooking({
      name: formData.name,
      course: courseLabels[formData.course],
    });

    setFormData({
      name: "",
      email: "",
      paticipants: 1,
      course: "",
      date: "",
      company: "",
      notes: "",
      newsletter: false
    });

  }

  return (
    <section>
      <h2>Kursbuchung</h2>

      {error && (
        <p className="error-message">
          {error}
        </p>
      )}

      {
        successBooking && (
          <p className="success-message">
            Die Buchung für <strong>{successBooking.name}</strong> im Kurs <strong>{successBooking.course}</strong> wurde erfasst.
          </p>
        )
      }

      <form onSubmit={handleSubmit}>

        <div>
          <label htmlFor="name">Name</label>
          <input type="text" name="name" id="name" value={formData.name} onChange={handleChange} />
        </div>

        <div>
          <label htmlFor="email">E-Mail-Adresse</label>
          <input type="text" name="email" id="email" value={formData.email} onChange={handleChange} />
        </div>

        <div>
          <label htmlFor="participants">Teilnehmer</label>
          <input type="number" name="participants" id="participants" value={formData.participants} onChange={handleChange} />
        </div>

        <div>
          <label htmlFor="course">Kurs</label>
          <select name="course" id="course" value={formData.course} onChange={handleChange}>
            <option value="" disabled>Bitte wählen</option>
            <option value="html">HTML & CSS</option>
            <option value="javascript">JavaScript</option>
            <option value="react">React</option>
          </select>
        </div>

        <div>
          <label htmlFor="date">Datum</label>
          <input type="date" name="date" id="date" value={formData.date} onChange={handleChange} />
        </div>

        <div>
          <label htmlFor="company">Firma</label>
          <input type="text" name="company" id="company" value={formData.company} onChange={handleChange} />
        </div>

        <div>
          <label htmlFor="notes">Bemerkungen</label>
          <textarea id="notes" name="notes" value={formData.notes} onChange={handleChange} />
        </div>

        <div>
          <label>
            <input type="checkbox" name="newsletter" checked={formData.newsletter} onChange={handleChange} />
            Newsletter abonnieren
          </label>
        </div>

        <div>
          <button type="submit">Buchung senden</button>
        </div>

      </form>
    </section>
  );
}