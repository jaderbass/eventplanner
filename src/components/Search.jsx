export default function Search({
  searchTerm,
  setSearchTerm,
  eventType,
  setEventType,
  registrationType,
  setRegistrationType
}) {
  console.log(searchTerm);
  return (
    <form className="search-form">
      {/* Leere Elemente müssen wie bei XML mit einem /> geschlossen werden */}
      {/* Manche Attribute heißen anders, z.B. class => className */}
      <div className="search-row">
        <div>
          <label htmlFor="search">Veranstaltungen suchen</label>
          <input
            className="form-control"
            type="search"
            id="eventSearch"
            value={searchTerm}
            onChange={event =>
              setSearchTerm(event.target.value)
            }
            placeholder="Titel eingeben"
          />
        </div>

        <div>
          <label htmlFor="eventType">nach Ort filtern</label>
          <select
            id="eventType"
            value={eventType}
            onChange={event =>
              setEventType(event.target.value)}
          >
            <option value="all">Alle</option>
            <option value="online">Online</option>
            <option value="onsite">Vor Ort</option>
          </select>
        </div>

        <div>
          <label htmlFor="registrationType">nach möglicher Registrierung filtern</label>
          <select
            id="registrationType"
            value={registrationType}
            onChange={event =>
              setRegistrationType(event.target.value)}
          >
            <option value="all">Alle</option>
            <option value="regOpen">Registrierung möglich</option>
            <option value="regClosed">Registrierung geschlossen</option>
          </select>
        </div>

      </div>
    </form >
  );
}