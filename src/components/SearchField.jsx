function SearchField({
  searchTerm,
  onSearchChange
}) {
  return (
    <div className="search-field">
      <label htmlFor="event-search">
        Events durchsuchen
      </label>

      <input
        type="search"
        id="event-search"
        value={searchTerm}
        onChange={(event) => onSearchChange(event.target.value)}
      />
    </div>
  );
}

export default SearchField;