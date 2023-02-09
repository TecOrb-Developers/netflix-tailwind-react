import React from "react";
import Footer from "./Footer";
import NavBar from "./Navbar";
import PropTypes from "prop-types";
const Layout = ({ children }) => {
  return (
    <div className="bg-main text-white">
      <NavBar />
      {children}
      <Footer />
    </div>
  );
};
Layout.propTypes = {
  children: PropTypes.any,
};
export default Layout;
