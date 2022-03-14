import React from "react";
import Navbar from "../Navbar/Navbar";

const styles = {
  layout: {
    alignItems: "center",
    display: "flex",
    flexDirection: "column",
  },
  container: {
    width: "100vw",
  },
};

const Layout = ({ children }) => {
  return (
    <div style={styles.layout}>
      <header>
        <Navbar />
      </header>
      <div style={styles.container}>{children}</div>
      <footer></footer>
    </div>
  );
};

export default Layout;
