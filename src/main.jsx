import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import router from "./Router";
import { RouterProvider } from "react-router-dom";
import RootState from "./context/root/RootState";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RootState>
      <RouterProvider router={router} />
    </RootState>
  </React.StrictMode>
);
