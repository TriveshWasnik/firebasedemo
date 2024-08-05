import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./component/Layout";

import Signup from "./page/firebase-authentication/Signup";
import Login from "./page/firebase-authentication/Login";
import UserProfile from "./page/UserProfile";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "", element: <Login /> },
      { path: "register", element: <Signup /> },
      { path: "user", element: <UserProfile /> },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <RouterProvider router={router}>
    <App />
  </RouterProvider>
);
