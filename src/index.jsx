import { render } from "solid-js/web";
import { Router } from "solid-app-router";

import "tailwindcss/tailwind.css";
import App from "./App";

render(
  () => (
    <Router>
      <App />
    </Router>
  ),
  document.getElementById("root")
);
