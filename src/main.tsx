import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, createBrowserRouter, RouterProvider } from 'react-router-dom'

import App from "./App";
import { Container } from './components';

let router = createBrowserRouter([
  {
    path: "/",
    Component: App,
  },
]);

if (import.meta.hot) {
  import.meta.hot.dispose(() => router.dispose());
}

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
      <React.Suspense fallback={<Container />}>
        <RouterProvider router={router} fallbackElement={<Container />} />
      </React.Suspense>
  </React.StrictMode>
);
