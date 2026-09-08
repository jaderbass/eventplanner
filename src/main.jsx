import { createRoot } from "react-dom/client";

import "./style.css";

// relative Pfadangaben wie in HTML, z.B. "components/Header.jsx" funktionieren nicht in JSX
// sie würden bei dieser Syntax wie Module behandelt. Richtig: "./components/Header.jsx".
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Search from "./components/Search.jsx";
import EventList from "./components/EventList.jsx";
import InfoBox from "./components/InfoBox.jsx";
import Section from "./components/Section.jsx";

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

          <InfoBox title="Hinweis">
            <p>Die Anmeldung ist ab sofort möglich.</p>
          </InfoBox>



          <Section title="Nächste Veranstaltungen">
            <p>Hier findest Du eine Auswahl unserer kommenden Events.</p>

            <EventList />
          </Section>

          <InfoBox title="Achtung!">
            <p>Anmeldeschluss ist jeweils 14 Tage vor dem Kursbeginn.</p>
            <p>Aktuelle Infos und Änderungen findet Ihr auf unseren Social-Media-Kanälen oder Ihr meldet Euch zu unserem Newsletter an.</p>
            <form action="#" method="post">
              <input type="text" name="fullname" placeholder="vollständiger Name" />
              <input type="email" name="email" placeholder="E-Mail-Adresse" />
              <button type="submit">Newsletter abonnieren</button>
            </form>
          </InfoBox>
        </div>
      </main>
      <Footer />
    </>
  );
}

root.render(<App />);