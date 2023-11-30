import React from "react";
import Header from "../header/header.component";
import { Outlet } from "react-router-dom";

const Layout = () => (
  <div>
    <Header />
    <Outlet />
  </div>
);
export default Layout;
