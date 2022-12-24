import React from "react";
import ReactDOM from "react-dom/client";
import Root from "views/Root";
import "main.css";
import reportWebVitals from "./reportWebVitals";
import {
  createBrowserRouter,
  HashRouter,
  Route,
  RouterProvider,
} from "react-router-dom";
import Landing from "views/Landing";
import Error404 from "views/Error404";

const router = createHashRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Error404 />,
    children: [
      {
        path: "/",
        element: <Landing />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
