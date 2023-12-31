import React from "react";
import Header from "./component/Header/Header";
import Footer from "./component/Footer/Footer";
import { Outlet } from "react-router-dom";
import User from "./component/user/User";

function Layout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
      {/* <User/> */}
    </>
  );
}

export default Layout;
