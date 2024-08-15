import React from "react";
import Menubar from "../Menubar";
import Hero from "../Hero";
import { Outlet } from "react-router-dom";
import Search from "../Search";

const Home = () => {
  return (
    <div>
      <Menubar></Menubar>
      <Outlet></Outlet>
    </div>
  );
};

export default Home;
