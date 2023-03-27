import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { HoudiniProvider } from "$houdini";

import "./static/colors.css";
import "./static/elements.css";
import "./static/style.css";

import client from "./client";
import App from "./App";
import { Container } from "./components";

let router = createBrowserRouter([
  {
    path: "/",
    Component: () => (
      <React.Suspense fallback={<Container />}>
        <App />
      </React.Suspense>
    ),
  },
]);

if (import.meta.hot) {
  import.meta.hot.dispose(() => router.dispose());
}

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <HoudiniProvider client={client}>
      <RouterProvider router={router} fallbackElement={<Container />} />
    </HoudiniProvider>
  </React.StrictMode>
);
