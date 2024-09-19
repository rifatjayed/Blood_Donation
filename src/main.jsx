import React from "react";
// import App from "./App.jsx";
import "./index.css";

import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/pages/Home.jsx";
import Login from "./components/pages/Login.jsx";
import RegisterPage from "./components/pages/RegisterPage.jsx";
// import Hero from "./components/Hero.jsx";
import AboutUs from "./components/pages/AboutUs.jsx";
import BloodList from "./components/pages/BloodList.jsx";
import Hero from "./components/Hero.jsx";
import { Provider } from "react-redux";
import store from "./components/redux/store.jsx";
import ForgotPassword from "./components/pages/ForgotPassword.jsx";
import NewPassPage from "./components/pages/NewPassPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children: [
      {
        path: "/",
        element: <Hero></Hero>,
      },
      {
        path: "/bloodList",
        element: <BloodList></BloodList>,
      },
      {
        path: "/aboutUs",
        element: <AboutUs></AboutUs>,
      },
      {
        path: "/Login",
        element: <Login></Login>,
      },
      {
        path: "/Register",
        element: <RegisterPage></RegisterPage>,
      },
      ,
      {
        path: "/BloodList",
        element: <BloodList></BloodList>,
      },
      ,
      {
        path: "/Forgot",
        element: <ForgotPassword></ForgotPassword>,
      },
      ,
      {
        path: "/SetPassword",
        element: <NewPassPage></NewPassPage>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
