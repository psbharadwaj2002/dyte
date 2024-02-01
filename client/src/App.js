import Ingestor from "./screens/Ingestor";
import Query from "./screens/Query";
import "./styles/styles.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Query />} />
          <Route path="/log-ingestor" element={<Ingestor />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
