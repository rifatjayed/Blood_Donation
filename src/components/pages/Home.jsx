import React from "react";
import Menubar from "../Menubar";
import Hero from "../Hero";
import { Outlet } from "react-router-dom";
import Search from "../Search";
import Footer from "./Footer";
import AuthProvider from "../../context/AuthProvider";

const Home = () => {
  return (
    <div>
      <AuthProvider>
        <Menubar></Menubar>
        <Outlet></Outlet>
        <Footer></Footer>
      </AuthProvider>
    </div>
  );
};

export default Home;
