import React from "react";
import Menubar from "../Menubar";
import Hero from "../Hero";
import { Outlet } from "react-router-dom";
import Search from "../Search";
import Footer from "./Footer";

const Home = () => {
  return (
    <div>
      <Menubar></Menubar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Home;
