export default function Search({
  searchTerm,
  setSearchTerm,
  eventType,
  setEventType
}) {
  console.log(searchTerm);
  return (
    <form className="search-form" action="#" method="get">
      <label htmlFor="search">Veranstaltungen suchen</label>
      {/* Leere Elemente müssen wie bei XML mit einem /> geschlossen werden */}
      {/* Manche Attribute heißen anders, z.B. class => className */}
      <div className="search-row">
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

      <select
        value={eventType}
        onChange={event =>
          setEventType(event.target.value)}
      >
        <option value="all">Alle</option>
        <option value="online">Online</option>
        <option value="onsite">Vor Ort</option>
      </select>


    </form >
  );
}