import React from "react";
import Footer from "./Footer";
import NavBar from "./Navbar";
const Layout = ({ children }) => {
  return (
    <div className="bg-main text-white">
      <NavBar />
      {children}
      <Footer />
    </div>
  );
};
export default Layout;
