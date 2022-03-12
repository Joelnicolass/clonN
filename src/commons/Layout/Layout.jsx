import React from "react";

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
      <div style={styles.container}>{children}</div>
    </div>
  );
};

export default Layout;
