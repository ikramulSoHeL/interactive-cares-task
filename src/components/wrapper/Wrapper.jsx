import React from "react";
import "./wrapper.scss";

const Wrapper = ({ children, bg }) => {
  return (
    <main
      className="wrapper"
      style={{
        background: bg ? bg : "white",
      }}
    >
      <section className="wrapper__child">{children}</section>
    </main>
  );
};

export default Wrapper;
