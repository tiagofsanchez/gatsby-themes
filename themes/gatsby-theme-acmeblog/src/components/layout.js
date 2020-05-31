import React from "react";
import Header from './header';
import "typeface-ibm-plex-sans"


const Layout = ({ children }) => {
  return (
    <div style={{marginTop: `60px`}}>
      <Header />
      <main style={{padding: `0px 40px` , marginTop: `60px` }}>
        {children}
      </main>
    </div>
  );
};
export default Layout;
