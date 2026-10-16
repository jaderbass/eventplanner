function RegistrationForm({
  formData,
  error,
  onChange,
  onSubmit
}) {
  return (
    <form onSubmit={onSubmit} noValidate>
      {error && (
        <p className="form-error">{error}</p>
      )}
      <div>
        <label htmlFor="name">Name*</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={onChange}
        />
      </div>

      <div>
        <label htmlFor="email">E-Mail*</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={onChange}
        />
      </div>

      <div>
        <label htmlFor="participants">Teilnehmer*</label>
        <input
          type="number"
          id="participants"
          name="participants"
          min="1"
          value={formData.participants}
          onChange={onChange}
        />
      </div>

      <button type="submit">Anmelden</button>

    </form>
  );
}

export default RegistrationForm;