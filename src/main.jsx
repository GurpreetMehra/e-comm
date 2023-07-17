import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import router from "./Router";
import { RouterProvider } from "react-router-dom";
import RootState from "./context/root/RootState";
import { CookiesProvider } from "react-cookie";
import { useCookies } from "react-cookie";
import interceptor from "./utils/Interceptor";

const App = ({ children }) => {
  const [cookies, setCookie] = useCookies(["token"]);
  useEffect(() => {
    const token = cookies.token;
    if (token) {
      interceptor(token);
    }
  }, []);
  return <>{children}</>;
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CookiesProvider>
      <App>
        <RootState>
          <RouterProvider router={router} />
        </RootState>
      </App>
    </CookiesProvider>
  </React.StrictMode>
);
