# React-Kurs – Checkliste & Spickzettel

## Projekt und Git einrichten

Arbeitsordner anlegen, z. B.:

```text
frontend-react/
├── eventplanner/
└── react-exercises/
```

`eventplanner` und `react-exercises` sind **zwei getrennte Git-Repositories**.

Git-Repository lokal initialisieren:

```bash
git init
```

Dateien für den ersten Commit vormerken:

```bash
git add .
```

Commit erstellen:

```bash
git commit -m "Initial project setup"
```

Remote-Repository bei GitHub anlegen und verbinden:

```bash
git remote add origin https://github.com/USERNAME/REPOSITORY.git
git branch -M main
git push -u origin main
```

Später reichen normalerweise:

```bash
git add .
git commit -m "Describe your changes"
git push
```

Aktuellen Stand prüfen:

```bash
git status
```

Änderungen vom Remote-Repository holen:

```bash
git pull
```

## `.gitignore`

Im Projekt anlegen:

```gitignore
node_modules/
.parcel-cache/
dist/
```

`node_modules` wird **nicht** ins Git-Repository übertragen.

---

## React-Projekt mit Parcel einrichten

Im Projektordner:

```bash
npm init -y
```

Falls in `package.json` danach steht:

```json
"main": "index.js"
```

diesen Eintrag bei unserem Parcel-Webprojekt entfernen.

React installieren:

```bash
npm install react react-dom
```

Parcel als Development Dependency installieren:

```bash
npm install --save-dev parcel
```

In `package.json`:

```json
"scripts": {
  "dev": "parcel index.html",
  "build": "parcel build index.html"
}
```

Projekt starten:

```bash
npm run dev
```

Abhängigkeiten eines vorhandenen Projekts installieren:

```bash
npm install
```

---

## Grundstruktur

Typischer EventPlanner:

```text
eventplanner/
├── index.html
├── demos.html
├── package.json
├── src/
│   ├── main.jsx
│   ├── style.css
│   ├── components/
│   ├── data/
│   ├── demos/
│   └── statuses/
└── .gitignore
```

---

## React starten

`index.html`:

```html
<div id="root"></div>

<script type="module" src="./src/main.jsx"></script>
```

`src/main.jsx`:

```jsx
import { createRoot } from "react-dom/client";

function App() {
  return (
    <h1>EventPlanner</h1>
  );
}

const root = createRoot(
  document.querySelector("#root")
);

root.render(<App />);
```

---

## Komponente erstellen

Datei z. B.:

```text
src/components/Header.jsx
```

```jsx
export default function Header() {
  return (
    <header>
      <h1>EventPlanner</h1>
    </header>
  );
}
```

Import:

```jsx
import Header from "./components/Header.jsx";
```

Verwendung:

```jsx
<Header />
```

Komponentennamen beginnen mit einem **Großbuchstaben**.

---

## Fragment

Mehrere Elemente ohne zusätzlichen DOM-Wrapper:

```jsx
<>
  <Header />
  <main>...</main>
  <Footer />
</>
```

---

## CSS einbinden

In `main.jsx`:

```jsx
import "./style.css";
```

In JSX:

```jsx
<div className="event-card">
```

Nicht:

```jsx
<div class="event-card">
```

---

## Props

Props übergeben:

```jsx
<EventCard
  title="React Grundlagen"
  price={129}
  online={false}
/>
```

Props verwenden:

```jsx
function EventCard(props) {
  return (
    <h2>{props.title}</h2>
  );
}
```

Oder mit Destrukturierung:

```jsx
function EventCard({
  title,
  price,
  online
}) {
  // ...
}
```

---

## `children`

```jsx
<InfoBox title="Hinweis">
  <p>Anmeldung ab sofort möglich.</p>
</InfoBox>
```

Komponente:

```jsx
export default function InfoBox({
  title,
  children
}) {
  return (
    <section>
      <h2>{title}</h2>
      {children}
    </section>
  );
}
```

`children` enthält das JSX zwischen öffnendem und schließendem Komponenten-Tag.

---

## Daten importieren

`src/data/events.js`:

```jsx
const events = [
  {
    id: 1,
    title: "React Grundlagen",
    price: 129
  }
];

export default events;
```

Import:

```jsx
import events from "../data/events.js";
```

---

## Array mit `map()` ausgeben

```jsx
{events.map((event) => (
  <EventCard
    key={event.id}
    {...event}
  />
))}
```

`map()`:

```text
Array
→ jedes Element bearbeiten
→ neues Array erzeugen
```

Bei React-Listen eine stabile `key` verwenden.

---

## Conditional Rendering

Ternary Operator:

```jsx
{online ? "Online" : location}
```

Nur anzeigen, wenn Bedingung wahr ist:

```jsx
{featured && (
  <strong>Empfohlen</strong>
)}
```

```jsx
{seats === 0 && (
  <p>Ausgebucht</p>
)}
```

---

## Dynamische CSS-Klassen

```jsx
<article
  className={`event-card ${
    online ? "online" : "onsite"
  }`}
>
```

Boolean-Attribute direkt mit Boolean-Wert steuern:

```jsx
<button disabled={seats === 0}>
  Details
</button>
```

---

## Events

```jsx
function handleClick() {
  console.log("geklickt");
}
```

```jsx
<button onClick={handleClick}>
  Klick mich
</button>
```

Funktionsreferenz:

```jsx
onClick={handleClick}
```

nicht:

```jsx
onClick={handleClick()}
```

Event-Objekt:

```jsx
function handleChange(event) {
  console.log(event.target.value);
}
```

---

## State mit `useState`

Import:

```jsx
import { useState } from "react";
```

Zahlen-State:

```jsx
const [count, setCount] = useState(0);
```

Ändern:

```jsx
setCount(count + 1);
```

Boolean-State:

```jsx
const [visible, setVisible] =
  useState(false);
```

Toggle:

```jsx
setVisible(!visible);
```

String-State:

```jsx
const [name, setName] = useState("");
```

### Wichtig bei State

Ein State-Wert ist für den aktuellen Render wie ein **Schnappschuss**.

```jsx
setCount(count + 1);
console.log(count);
```

Das `console.log()` zeigt innerhalb desselben Handlers noch den Wert des aktuellen Renders.

Der neue Wert steht beim **nächsten Render** zur Verfügung.

---

## Controlled Input

```jsx
const [name, setName] = useState("");
```

```jsx
<input
  type="text"
  value={name}
  onChange={(event) =>
    setName(event.target.value)
  }
/>
```

Prinzip:

```text
State
→ value
→ Input
→ onChange
→ Setter
→ neuer State
```

---

## Number-Input

Auch bei:

```html
<input type="number">
```

liefert:

```jsx
event.target.value
```

zunächst einen String.

Bei Berechnungen deshalb beispielsweise:

```jsx
setQuantity(
  Number(event.target.value)
);
```

---

## Checkbox

Bei Checkboxen:

```jsx
const [newsletter, setNewsletter] =
  useState(false);
```

```jsx
<input
  type="checkbox"
  checked={newsletter}
  onChange={(event) =>
    setNewsletter(event.target.checked)
  }
/>
```

Hier wird `checked` statt `value` verwendet.

---

## Select

```jsx
const [course, setCourse] =
  useState("");
```

```jsx
<select
  value={course}
  onChange={(event) =>
    setCourse(event.target.value)
  }
>
  <option value="" disabled>
    Bitte wählen
  </option>

  <option value="react">
    React
  </option>
</select>
```

Bei einem Controlled Select wird die Auswahl über:

```jsx
value={course}
```

am `<select>` gesteuert – nicht mit `selected` am `<option>`.

---

## Formular absenden

```jsx
function handleSubmit(event) {
  event.preventDefault();

  // Formular verarbeiten
}
```

```jsx
<form onSubmit={handleSubmit}>
```

```jsx
<button type="submit">
  Absenden
</button>
```

---

## State als Objekt

Bei vielen zusammengehörigen Formularfeldern:

```jsx
const [formData, setFormData] =
  useState({
    name: "",
    email: "",
    participants: 1
  });
```

Formularfelder benötigen für einen gemeinsamen Handler ein `name`:

```jsx
<input
  type="text"
  name="name"
  value={formData.name}
  onChange={handleChange}
/>
```

Gemeinsamer Handler:

```jsx
function handleChange(event) {
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
```

---

## Array im State

```jsx
const [
  registrations,
  setRegistrations
] = useState([]);
```

Neues Element hinzufügen:

```jsx
setRegistrations([
  ...registrations,
  registration
]);
```

Nicht einfach den State direkt verändern:

```jsx
registrations.push(registration);
```

React-State sollte über den Setter aktualisiert werden.

---

## Abgeleitete Werte

Nicht jeder berechnete Wert benötigt eigenen State.

```jsx
const totalPrice =
  price * quantity;
```

Wenn sich `price` oder `quantity` ändern, wird `totalPrice` beim nächsten Render neu berechnet.

---

Klar. Wenn Deine Checkliste bei **„abgeleitete Werte“** endet, würde ich danach noch diese Punkte ergänzen.

## `useEffect`

### Wofür?

Für Seiteneffekte, also Dinge, die **nach dem Rendern** passieren und nicht direkt zur JSX-Ausgabe gehören.

Typische Beispiele:

```text
Browser-Titel ändern
localStorage aktualisieren
Timer starten
Daten laden
Event Listener setzen
```

### Grundform

```jsx
useEffect(() => {
  // Effect
}, []);
```

### Dependency Array

```jsx
useEffect(() => {
  // läuft beim Start
  // und wenn count geändert wurde
}, [count]);
```

Merksatz:

```text
Das Dependency Array enthält die Werte,
von deren Änderungen der Effect abhängt.
```

Varianten:

```jsx
useEffect(() => {
  // nach jedem Render
});
```

```jsx
useEffect(() => {
  // beim Mount
}, []);
```

```jsx
useEffect(() => {
  // beim Mount und wenn count geändert wurde
}, [count]);
```

---

## `useEffect` mit Cleanup

Wenn ein Effect etwas startet, das später wieder aufgeräumt werden sollte, kann er eine Funktion zurückgeben.

Beispiel Timer:

```jsx
useEffect(() => {
  const timeoutId = setTimeout(() => {
    setSuccessBooking(null);
  }, 3000);

  return () => {
    clearTimeout(timeoutId);
  };
}, [successBooking]);
```

Merksatz:

```text
Cleanup räumt den vorherigen Effect auf,
bevor er erneut ausgeführt wird
oder die Komponente entfernt wird.
```

---

## Erfolgsmeldung automatisch ausblenden

```jsx
useEffect(() => {
  if (!successBooking) {
    return;
  }

  const timeoutId = setTimeout(() => {
    setSuccessBooking(null);
  }, 3000);

  return () => {
    clearTimeout(timeoutId);
  };
}, [successBooking]);
```

Optional zusätzlich bei neuer Eingabe:

```jsx
setSuccessBooking(null);
```

im `handleChange()`.

---

## `localStorage`

### Speichern

```jsx
useEffect(() => {
  localStorage.setItem(
    "registrations",
    JSON.stringify(registrations)
  );
}, [registrations]);
```

### Laden

```jsx
const [registrations, setRegistrations] =
  useState(() => {
    const savedRegistrations =
      localStorage.getItem("registrations");

    return savedRegistrations
      ? JSON.parse(savedRegistrations)
      : [];
  });
```

Merksatz:

```text
localStorage speichert Strings.
Objekte und Arrays:
JSON.stringify() beim Speichern
JSON.parse() beim Laden
```

---

## `useRef`

### Wofür?

`useRef` speichert einen Wert über mehrere Render hinweg, ohne selbst einen neuen Render auszulösen.

Typische Anwendungen:

```text
DOM-Element ansprechen
Fokus setzen
vorherigen Wert merken
internen Wert behalten
```

### DOM-Zugriff

```jsx
const inputRef = useRef(null);
```

```jsx
<input ref={inputRef} />
```

```jsx
inputRef.current?.focus();
```

Merksatz:

```text
ref.current enthält die Referenz
auf das verbundene DOM-Element.
```

---

## `useRef` vs. `useState`

```text
useState
→ UI-relevante Daten
→ Änderung führt zu neuem Render

useRef
→ Referenz / interner Wert
→ Änderung führt nicht zu neuem Render
```

---

## Vorherigen Wert mit `useRef` merken

```jsx
const previousCountRef = useRef(count);

useEffect(() => {
  previousCountRef.current = count;
}, [count]);
```

Dann:

```jsx
<p>Aktuell: {count}</p>
<p>Vorher: {previousCountRef.current}</p>
```

---

## Zusammenspiel der Hooks

```text
useState
→ speichert Zustand

useEffect
→ reagiert nach dem Render auf Änderungen

useRef
→ merkt sich Referenzen oder Werte,
  ohne Render auszulösen
```

---

## Suche und Filter

Suchbegriff als State:

```jsx
const [searchTerm, setSearchTerm] =
  useState("");
```

Gefilterte Daten als **abgeleiteter Wert**:

```jsx
const filteredEvents =
  events.filter((event) =>
    event.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase())
  );
```

Merksatz:

```text
Suchbegriff = State
gefilterte Liste = abgeleiteter Wert
```

---

## Kein Treffer

```jsx
{filteredEvents.length === 0 && (
  <p>Keine passenden Events gefunden.</p>
)}
```

Unterschied:

```text
Empty State
→ es gibt überhaupt keine Daten

No Results
→ Daten existieren,
  aber der Filter findet nichts
```

---

## Lifting State Up

Wenn mehrere Komponenten denselben State brauchen:

```text
State in die nächsthöhere gemeinsame
Parent-Komponente verschieben.
```

Beispiel:

```text
App
├── EventList
└── RegistrationManager
```

Beide brauchen:

```text
registrations
```

also liegt der State in:

```text
App
```

---

## Datenfluss merken

```text
Daten:
Parent → Props → Child

Aktionen:
Child → Callback → Parent
```

---

## Fehlersuche

### Wenn die Seite leer bleibt

```text
1. Browser-Konsole prüfen
2. Terminal mit Parcel prüfen
3. Imports und Pfade kontrollieren
4. JSX-Syntax kontrollieren
5. Browser manuell neu laden
```

### Typische Fehler

```text
./components/Header.jsx
```

statt eines falschen relativen Pfads.

Bei JSX:

```jsx
className
```

statt:

```jsx
class
```

und mehrere Root-Elemente ggf. mit:

```jsx
<>
  ...
</>
```

gruppieren.

### Wenn gespeicherte Änderungen trotz korrektem Code nicht im Browser erscheinen

```text
1. Browser neu laden
2. Parcel stoppen
3. `.parcel-cache` löschen
4. Parcel neu starten
```

Unter PowerShell:

```powershell
Remove-Item -Recurse -Force .parcel-cache
npm run dev
```

**Wichtig:**

```text
`dist` nicht manuell bearbeiten – das Verzeichnis wird von Parcel erzeugt.
```

---

## Git nicht vergessen

Nach einem sinnvollen Arbeitsschritt:

```bash
git status
git add .
git commit -m "Add event state handling"
git push
```

Commit-Texte kurz beschreiben, **was sich geändert hat**.

---
