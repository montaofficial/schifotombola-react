import "./App.css";
import { current, extractNumber, last } from "./data";
import Table from './Table';

function App() {
  return (
    <>
    <Table/>
      <div className="current">
        <h2>ESTRATTO IL</h2>
        <div className="current-number">{current}</div>
      </div>

      <div className="last">
        <h3>ULTIMI</h3>
        <div className="last-container">
          {last.value.map(value => <div key={value} className="last-number">{value}</div>)}
        </div>
      </div>
      <button onClick={extractNumber}>EXTRACT</button>
    </>
  );
}

export default App;
