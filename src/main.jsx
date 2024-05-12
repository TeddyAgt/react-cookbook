import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import "./assets/styles/index.scss";
import { ApiContext } from "./context/ApiContext.jsx";
import { router } from "./router.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ApiContext.Provider value="https://restapi.fr/api/tagt_recipes">
      <RouterProvider router={router}></RouterProvider>
    </ApiContext.Provider>
  </React.StrictMode>
);

