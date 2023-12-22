import { useEffect, useState } from "react";
import "./App.css";
import Table from './Table';

function App() {

   const [table, setTable] = useState(getTable());
   const [remaining, setRemaining] = useState(getRemaining());
   const [last, setLast] = useState(getLast());
   const [current,setCurrent] = useState(getCurrent());

  useEffect(() => {
 localStorage.setItem("table", JSON.stringify(table))
},[table]);

useEffect(() => {
 localStorage.setItem("current", JSON.stringify(current))
}, [current]);

useEffect(() => {
 localStorage.setItem("last", JSON.stringify(last))
}, [last]);

useEffect(() => {
 localStorage.setItem("remaining", JSON.stringify(remaining))
}, [remaining]);

  const extractNumber = () => {
    if (remaining.length === 0) {
      throw new Error("No more numbers to extract");
  }
    const randomIndex = Math.floor(Math.random() * remaining.length);
    const extractedNumber = remaining[randomIndex];
  
    // Remove the extracted number from the array
    setRemaining(remaining.filter((number) => number !== extractedNumber));
  
    setCurrent(extractedNumber);
    let temparray = [...last];
    temparray.unshift(extractedNumber);
    if (temparray.length > 5)temparray.pop();
    setLast(temparray);
    let temparray2 = [...table];
    temparray2[extractedNumber] = true;
    setTable(temparray2);
  
    return extractedNumber;
  }

  const clearAll = ()=>{
    localStorage.clear();
    setCurrent(getCurrent());
    setLast(getLast());
    setRemaining(getRemaining());
    setTable(getTable());

  }
  return (
    <>
    <Table table={table}/>
      <div className="current">
        <h2>ESTRATTO IL</h2>
        <div className="current-number">{current}</div>
      </div>

      <div className="last">
        <h3>ULTIMI</h3>
        <div className="last-container">
          {last.map(value => (<div key={value} className="last-number">{value}</div>))}
        </div>
      </div>
      <button onClick={extractNumber}>EXTRACT</button>
      <button onClick={clearAll}>RESTART</button>
    </>
  );
}

export default App;

function initTable() {
  return Array.from({ length: 91 }, (_, i) => false);
}


// Function to create an array with numbers from 1 to 90
function createNumberArray() {
  return Array.from({ length: 90 }, (_, i) => i + 1);
}

function getRemaining() {
  const value = localStorage.getItem("remaining");
  if (!value) return createNumberArray();
  return JSON.parse(value);
}

function getLast() {
  const value = localStorage.getItem("last");
  if (!value) return [];
  return JSON.parse(value);
}

function getCurrent() {
  const value = localStorage.getItem("current");
  if (!value) return 0;
  return JSON.parse(value);
}

function getTable() {
  const value = localStorage.getItem("table");
  if (!value) return initTable();
  return JSON.parse(value);
}