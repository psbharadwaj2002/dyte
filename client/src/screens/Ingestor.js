import React from "react";
import { Link } from "react-router-dom";

function Ingestor() {
  return (
    <div className="Ingestor">
      <header>
        <br />
        <h2>Log Ingestor and Query Interface</h2>
      </header>
      <h3>Log Ingestor</h3>
      <div className="inputs">
        <div className="inputs">
          <div>
            <label htmlFor="level">Level</label>
            <span>:</span>
            <input type="text" id="level" placeholder="Level" />
          </div>
          <div>
            <label htmlFor="message">Message</label>
            <span>:</span>
            <input type="text" id="message" placeholder="Message" />
          </div>
          <div>
            <label htmlFor="resource">Resource Id</label>
            <span>:</span>
            <input type="text" id="resource" placeholder="Resource ID" />
          </div>
          <div>
            <label htmlFor="timestamp">Timestamp</label>
            <span>:</span>
            <input type="text" id="timestamp" placeholder="Timestamp" />
          </div>
          <div>
            <label htmlFor="trace">Trace ID</label>
            <span>:</span>
            <input type="text" id="trace" placeholder="Trace ID" />
          </div>
          <div>
            <label htmlFor="span">Span ID</label>
            <span>:</span>
            <input type="text" id="span" placeholder="Span ID" />
          </div>
          <div>
            <label htmlFor="commit">Commit</label>
            <span>:</span>
            <input type="text" id="commit" placeholder="Commit" />
          </div>
          <div>
            <label htmlFor="parent">Parent Resource ID</label>
            <span>:</span>
            <input type="text" id="parent" placeholder="Parent Resource ID" />
          </div>
        </div>
      </div>
      <button className="button">
        <Link to="/" style={{ textDecoration: "none", color: "black" }}>
          Query Interface
        </Link>
      </button>
    </div>
  );
}

export default Ingestor;
