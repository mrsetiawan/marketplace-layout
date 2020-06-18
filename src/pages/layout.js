import React from "react";
import { MainNavbar,Footer } from "../components";

export const Layout = props => {
  return (
    <>
      <MainNavbar />
        {props.children}
      <Footer />
    </>
  );
};
