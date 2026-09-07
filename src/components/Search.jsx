export default function Search() {
  return (
    <form action="#" method="get">
      <label htmlFor="search"></label>
      {/* Leere Elemente müssen wie bei XML mit einem /> geschlossen werden */}
      {/* Manche Attribute heißen anders, z.B. class => className */}
      <input className="form-control" type="search" name="search" id="search" />
      <button type="submit">Finde!!!</button>
    </form>
  );
}