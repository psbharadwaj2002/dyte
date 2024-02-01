import React, { useState } from "react";
import { Link } from "react-router-dom";

function Ingestor() {
  const [logData, setLogData] = useState({
    level: "",
    message: "",
    resourceId: "",
    timestamp: "",
    traceId: "",
    spanId: "",
    commit: "",
    metadata: {
      parentResourceId: "",
    },
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name.includes("metadata.")) {
      const metadataField = name.split(".")[1];
      setLogData((prevData) => ({
        ...prevData,
        metadata: { ...prevData.metadata, [metadataField]: value },
      }));
    } else {
      setLogData((prevData) => ({ ...prevData, [name]: value }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(
        "https://logingestor-queryinterface-lt6k.onrender.com/ingestLogs",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(logData),
        }
      );

      if (res.ok) {
        setLogData({
          level: "",
          message: "",
          resourceId: "",
          timestamp: "",
          traceId: "",
          spanId: "",
          commit: "",
          metadata: {
            parentResourceId: "",
          },
        });
      } else {
        console.error("Error ingesting log:", res.statusText);
      }
    } catch (error) {
      console.error("Error ingesting log:", error.message);
    }
  };

  return (
    <div className="Ingestor">
      <header>
        <br />
        <h2>Log Ingestor and Query Interface</h2>
      </header>
      <h3>Log Ingestor</h3>
      <form onSubmit={handleSubmit}>
        <div className="inputs">
          <div>
            <label htmlFor="level">Level</label>
            <span>:</span>
            <input
              type="text"
              id="level"
              placeholder="Level"
              name="level"
              value={logData.level}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="message">Message</label>
            <span>:</span>
            <input
              type="text"
              id="message"
              placeholder="Message"
              name="message"
              value={logData.message}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="resourceId">Resource Id</label>
            <span>:</span>
            <input
              type="text"
              id="resourceId"
              placeholder="Resource ID"
              name="resourceId"
              value={logData.resourceId}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="timestamp">Timestamp</label>
            <span>:</span>
            <input
              type="text"
              id="timestamp"
              placeholder="Timestamp"
              name="timestamp"
              value={logData.timestamp}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="traceId">Trace ID</label>
            <span>:</span>
            <input
              type="text"
              id="traceId"
              placeholder="Trace ID"
              name="traceId"
              value={logData.traceId}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="spanId">Span ID</label>
            <span>:</span>
            <input
              type="text"
              id="spanId"
              placeholder="Span ID"
              name="spanId"
              value={logData.spanId}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="commit">Commit</label>
            <span>:</span>
            <input
              type="text"
              id="commit"
              placeholder="Commit"
              name="commit"
              value={logData.commit}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="metadata.parentResourceId">
              Parent Resource ID
            </label>
            <span>:</span>
            <input
              type="text"
              id="parent"
              placeholder="Parent Resource ID"
              name="metadata.parentResourceId"
              value={logData.metadata.parentResourceId}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <button
          type="submit"
          className="button"
          style={{
            backgroundColor: "green",
            color: "white",
            padding: "6px 20px",
          }}
        >
          Submit
        </button>
      </form>
      <button className="button">
        <Link to="/" style={{ textDecoration: "none", color: "black" }}>
          Query Interface
        </Link>
      </button>
    </div>
  );
}

export default Ingestor;
