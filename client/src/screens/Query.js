import React from "react";
import Display from "../components/Display";
import Footer from "../components/Footer";

function Query() {
  return (
    <div>
      <header>
        <br />
        <h2>Log Ingestor and Query Interface</h2>
      </header>
      <div>
        <Display />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default Query;
