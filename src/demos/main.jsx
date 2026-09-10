import { createRoot } from "react-dom/client";
import PriceCalculator from "./PriceCalculator";

function DemoApp() {
  return (
    <>
      <PriceCalculator />
    </>
  );
}

const root = createRoot(
  document.querySelector("#root")
);

root.render(<DemoApp />);