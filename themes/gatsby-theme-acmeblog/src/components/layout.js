import React from "react";
import Header from './header';


const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <main style={{marginTop: `100px`, padding: `15px` }}>{children}</main>
    </div>
  );
};
export default Layout;
