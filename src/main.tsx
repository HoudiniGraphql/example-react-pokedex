import React from "react";
import ReactDOM from "react-dom/client";
import { HoudiniProvider } from "$houdini";

import "./static/colors.css";
import "./static/elements.css";
import "./static/style.css";

import client from "./client";
import App from "./App";
import { SuspenseRouter } from "./router";
import { Container } from "./components";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <HoudiniProvider client={client}>
      <SuspenseRouter fallback={<Container />}>
        <App />
      </SuspenseRouter>
    </HoudiniProvider>
  </React.StrictMode>
);
