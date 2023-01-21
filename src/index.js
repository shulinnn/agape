import React from "react";
import ReactDOM from "react-dom/client";
import Root from "views/Root";
import "main.css";
import reportWebVitals from "./reportWebVitals";
import { RouterProvider, createHashRouter } from "react-router-dom";
import Landing from "views/Landing";
import Error404 from "views/Error404";
import AboutUs from "views/AboutUs";
import Gallery from "views/Gallery";
import Reservation from "views/Reservation";
import Avaiability from "views/Availability";
import Contact from "views/Contact";
import OurRooms from "views/OurRooms";
import Room from "views/Room";

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
      {
        path: "/o-nas",
        element: <AboutUs />,
      },
      {
        path: "/galerie",
        element: <Gallery />,
      },
      {
        path: "/rezervace",
        element: <Reservation />,
      },
      {
        path: "/dostupnost/:arrival/:depart",
        element: <Avaiability />,
      },
      {
        path: "/kontakt",
        element: <Contact />,
      },
      {
        path: "/nase-pokoje",
        element: <OurRooms />,
      },
      {
        path: "/pokoj/:id",
        element: <Room />,
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
