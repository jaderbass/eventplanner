import { createRoot } from "react-dom/client";

const root = createRoot(document.querySelector("#root"));

// Komponente für den Datei-Header
function Header() {
  return (
    <header>
      <h1>EventPlanner</h1>
    </header>
  );
}

// Komponente für den Footer
function Footer() {
  return (
    <footer>
      <p>&copy; EventPlanner</p>
    </footer>
  );
}

function Search() {
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

// Haupt-Komponente für das UI
function App() {
  return (
    // Platzhalter für ein Root-Element
    // Fragment: gruppiert mehrere JSX-Elemente, ohne selbst ein HTML-Element im DOM zu erzeugen
    <>
      <Header />
      <Search />
      <main>
        <h2>Veranstaltungen</h2>
      </main>
      <Footer />
    </>
  );
}

root.render( <App /> );