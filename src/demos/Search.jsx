export default function Search() {
  return (
    <form className="search-form" action="#" method="get">
      <label htmlFor="search">Veranstaltungen suchen</label>
      {/* Leere Elemente müssen wie bei XML mit einem /> geschlossen werden */}
      {/* Manche Attribute heißen anders, z.B. class => className */}
      <div className="search-row">
        <input className="form-control" type="search" name="search" id="search" />
        <button type="submit">Finde!!!</button>
      </div>
    </form>
  );
}