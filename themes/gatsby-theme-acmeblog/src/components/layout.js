import React from "react";
import Header from './header';
import "typeface-ibm-plex-sans"


const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <main style={{ marginTop: `130px`, padding: `0px 40px` }}>
        {children}
      </main>
    </div>
  );
};
export default Layout;
