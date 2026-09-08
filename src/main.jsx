import { createRoot } from "react-dom/client";

import "./style.css";

// relative Pfadangaben wie in HTML, z.B. "components/Header.jsx" funktionieren nicht in JSX
// sie würden bei dieser Syntax wie Module behandelt. Richtig: "./components/Header.jsx".
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Search from "./components/Search.jsx";
import EventList from "./components/EventList.jsx";

const root = createRoot(document.querySelector("#root"));

// Haupt-Komponente für das UI
function App() {
  return (
    // Platzhalter für ein Root-Element
    // Fragment: gruppiert mehrere JSX-Elemente, ohne selbst ein HTML-Element im DOM zu erzeugen
    <>
      <Header />
      <main>
        <div className="container">
          <Search />
          <EventList />
        </div>
      </main>
      <Footer />
    </>
  );
}

root.render(<App />);