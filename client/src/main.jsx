import React from "react";
import ReactDOM from "react-dom/client";

import "./assets/css/app.min.css";
import "./assets/css/bootstrap.min.css";
import "./assets/css/icons.min.css";

import NavBar from "./components/ui/NavBar";
import Home from "./pages/Home";
import Chat from "./pages/Chat";
import Setting from "./pages/Setting";
import Contact from "./pages/Contact";
import Calls from "./pages/Calls";

import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Container from "./components/ui/Container";
import Default from "./components/ui/Default";
import Login from "./components/ui/Auth/Login";

import { AuthProvider } from "./context/AuthContext";
import ProtectedRoute from "./utility/ProtectedRoute";



const router = createBrowserRouter([
   {
      element : <ProtectedRoute />,
      children : [
         {
            path: "/",
            element: <Container />,
            children: [
              {
                path: "/",
                element: <Home />,
              },
              {
                path: "/chat",
                element: <Chat />,
              },
              {
                path: "/contact",
                element: <Contact />,
              },
              {
                path: "/calls",
                element: <Calls />,
              },
              {
                path: "/setting",
                element: <Setting />,
              },
            ],
          },
      ]
   },
  {
    path: "/login",
    element: <Login />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <div className="layout-wrapper d-lg-flex">
        <RouterProvider router={router} />
      </div>
    </AuthProvider>
  </React.StrictMode>
);
