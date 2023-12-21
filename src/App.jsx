import "./App.css";
import { current, extractNumber } from "./data";
import Table from './Table';

function App() {
  return (
    <>
    <Table/>
      <div className="current">
        <h2>ESTRATTO IL</h2>
        <div className="current-number">{current.value}</div>
      </div>

      <div className="last">
        <h3>ULTIMI</h3>
        <div className="last-container">
          <div className="last-number">1</div>
          <div className="last-number">2</div>
          <div className="last-number">3</div>
          <div className="last-number">4</div>
          <div className="last-number">5</div>
          <div className="last-number">6</div>
          <div className="last-number">7</div>
          <div className="last-number">8</div>
          <div className="last-number">9</div>
          <div className="last-number">10</div>
          <div className="last-number">11</div>
          <div className="last-number">12</div>
        </div>
      </div>
      <button onClick={extractNumber}>EXTRACT</button>
    </>
  );
}

export default App;
