import Display from "./components/Display";
import Footer from "./components/Footer";
import "./styles/styles.css";

function App() {
  return (
    <div className="App">
      <header>
        <h1>SDE-1 Assignment</h1>
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

export default App;
