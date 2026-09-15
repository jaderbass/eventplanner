import { createRoot } from "react-dom/client";
import PreviousValue from "./PreviousValue.jsx";

function DemoApp() {
  return (
    <>
      <PreviousValue />
    </>
  );
}

const root = createRoot(
  document.querySelector("#root")
);

root.render(<DemoApp />);