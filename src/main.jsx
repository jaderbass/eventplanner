import { createRoot } from "react-dom/client";
import App from "./components/App.jsx";

const rootElement = document.querySelector("#root");
const root = createRoot(rootElement);

root.render(
  <App />
);