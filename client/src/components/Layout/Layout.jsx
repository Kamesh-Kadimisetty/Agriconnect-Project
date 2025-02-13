import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <div>
      <div className="flex">
        <Header />
        <main className="flex-1" style={{ minHeight: "84vh" }}>
          {children}
        </main>
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default Layout;
