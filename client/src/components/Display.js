// import React, { useState, useEffect } from "react";
// import "../styles/styles.css";

// function Display() {
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     fetch(`http://localhost:3000/getLogs`)
//       .then((res) => res.json())
//       .then((data) => {
//         setData(data.data);
//       })
//       .catch((error) => {
//         console.error("Error fetching data:", error);
//         return <div>Error Fetching data</div>;
//       });
//   }, []);

//   return (
//     <div className="Display">
//       <input />
//       <div className="display">
//         {data.map((log) => {
//           return (
//             <div className="show">
//               <div>
//                 <span className="sideHeading">
//                   Level <span>: </span>
//                 </span>
//                 <span>{log.level}</span>
//               </div>
//               <div>
//                 <span className="sideHeading">
//                   Message <span>: </span>
//                 </span>
//                 <span>{log.message}</span>
//               </div>
//               <div>
//                 <span className="sideHeading">
//                   Resource ID <span>: </span>
//                 </span>
//                 <span>{log.resourceId}</span>
//               </div>
//               <div>
//                 <span className="sideHeading">
//                   Timestamp <span>: </span>
//                 </span>
//                 <span>{log.timestamp}</span>
//               </div>
//               <div>
//                 <span className="sideHeading">
//                   Trace ID <span>: </span>
//                 </span>
//                 <span>{log.traceId}</span>
//               </div>
//               <div>
//                 <span className="sideHeading">
//                   Span ID <span>: </span>
//                 </span>
//                 <span>{log.spanId}</span>
//               </div>
//               <div>
//                 <span className="sideHeading">
//                   Commit <span>: </span>
//                 </span>
//                 <span>{log.commit}</span>
//               </div>
//               <div>
//                 <span className="sideHeading">
//                   Parent Resource ID <span>: </span>
//                 </span>
//                 <span>{log.metadata.parentResourceId}</span>
//               </div>
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// }

// export default Display;

// Display.js

import React, { useState, useEffect } from "react";
import "../styles/styles.css";

function Display() {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [filters, setFilters] = useState({
    level: "",
    message: "",
    resourceId: "",
    timestamp: "",
    traceId: "",
    spanId: "",
    commit: "",
    parentResourceId: "",
  });

  useEffect(() => {
    fetch(`http://localhost:3000/getLogs`)
      .then((res) => res.json())
      .then((data) => {
        setData(data.data);
        setFilteredData(data.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const handleFilterChange = (filterKey, value) => {
    setFilters({
      ...filters,
      [filterKey]: value,
    });
  };

  useEffect(() => {
    const filtered = data.filter((log) => {
      return Object.entries(filters).every(([key, value]) =>
        value
          ? key === "parentResourceId"
            ? log.metadata?.parentResourceId
              ? log.metadata.parentResourceId
                  .toLowerCase()
                  .includes(value.toLowerCase())
              : false
            : log[key]?.toLowerCase().includes(value.toLowerCase())
          : true
      );
    });

    setFilteredData(filtered);
  }, [data, filters]);

  return (
    <div className="Display">
      <h3>Query Interface</h3>
      <div className="inputs">
        <input
          type="text"
          placeholder="Level"
          value={filters.level}
          onChange={(e) => handleFilterChange("level", e.target.value)}
        />
        <input
          type="text"
          placeholder="Message"
          value={filters.message}
          onChange={(e) => handleFilterChange("message", e.target.value)}
        />
        <input
          type="text"
          placeholder="Resource ID"
          value={filters.resourceId}
          onChange={(e) => handleFilterChange("resourceId", e.target.value)}
        />
        <input
          type="text"
          placeholder="Timestamp"
          value={filters.timestamp}
          onChange={(e) => handleFilterChange("timestamp", e.target.value)}
        />
        <input
          type="text"
          placeholder="Trace ID"
          value={filters.traceId}
          onChange={(e) => handleFilterChange("traceId", e.target.value)}
        />
        <input
          type="text"
          placeholder="Span ID"
          value={filters.spanId}
          onChange={(e) => handleFilterChange("spanId", e.target.value)}
        />
        <input
          type="text"
          placeholder="Commit"
          value={filters.commit}
          onChange={(e) => handleFilterChange("commit", e.target.value)}
        />
        <input
          type="text"
          placeholder="Parent Resource ID"
          value={filters.parentResourceId}
          onChange={(e) =>
            handleFilterChange("parentResourceId", e.target.value)
          }
        />
      </div>
      {/* Here the data is displayed */}
      {/* display class shows call the data and div which contains class show is individual log */}
      <h3>Results</h3>
      <div className="display">
        {filteredData.length === 0 ? (
          <div className="noDataDiv">
            <span>Sorry no data found...</span>
          </div>
        ) : (
          filteredData.map((log) => (
            <div className="show" key={log._id}>
              <div>
                {" "}
                <span className="sideHeading">
                  Level <span>: </span>{" "}
                </span>
                <span>{log.level}</span>{" "}
              </div>{" "}
              <div>
                {" "}
                <span className="sideHeading">
                  Message <span>: </span>{" "}
                </span>
                <span>{log.message}</span>{" "}
              </div>{" "}
              <div>
                {" "}
                <span className="sideHeading">
                  Resource ID <span>: </span>{" "}
                </span>
                <span>{log.resourceId}</span>{" "}
              </div>{" "}
              <div>
                {" "}
                <span className="sideHeading">
                  Timestamp <span>: </span>{" "}
                </span>
                <span>{log.timestamp}</span>{" "}
              </div>{" "}
              <div>
                {" "}
                <span className="sideHeading">
                  Trace ID <span>: </span>{" "}
                </span>
                <span>{log.traceId}</span>{" "}
              </div>{" "}
              <div>
                {" "}
                <span className="sideHeading">
                  Span ID <span>: </span>{" "}
                </span>
                <span>{log.spanId}</span>{" "}
              </div>{" "}
              <div>
                {" "}
                <span className="sideHeading">
                  Commit <span>: </span>{" "}
                </span>
                <span>{log.commit}</span>{" "}
              </div>{" "}
              <div>
                {" "}
                <span className="sideHeading">
                  Parent Resource ID <span>: </span>{" "}
                </span>
                <span>{log.metadata.parentResourceId}</span>{" "}
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default Display;
