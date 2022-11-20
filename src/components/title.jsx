import React, { memo } from "react";

import "../styles/title.scss";

const Title = memo(() => {
  return (
    <section className="title_container">
      <div className="title_background"></div>
      <div className="title_filter"></div>{" "}
      <div className="title_contents">
        <h1>ENET-C</h1>
        <div className="line"></div>
        <br />
        <h2>
          "Welcome to my Portfolio"
        </h2>
      </div>
    </section>
  );
});

export default Title;
