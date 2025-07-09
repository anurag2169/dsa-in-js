import "./App.css";
import Chart from "./questions/jiraChart/Chart";

function App() {
  return (
    <div>
      <Chart />

      <div className="pie-chart">
        <div className="inner"></div>
      </div>

      <div className="pie-chart"></div>
    </div>
  );
}

export default App;
