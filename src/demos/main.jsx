import { createRoot } from "react-dom/client";
import EffectDemo from "./EffectDemo.jsx";

function DemoApp() {
  return (
    <>
      <EffectDemo />
    </>
  );
}

const root = createRoot(
  document.querySelector("#root")
);

root.render(<DemoApp />);