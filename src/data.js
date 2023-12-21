import { effect, signal } from "@preact/signals-react";

export const table = signal(getTable());
function getTable() {
  const value = localStorage.getItem("table");
  if (!value) return initTable();
  return JSON.parse(value);
}

effect(() => {
 localStorage.setItem("table", JSON.stringify(table.value))
});

export const current = signal(getCurrent());
function getCurrent() {
  const value = localStorage.getItem("current");
  if (!value) return 0;
  return JSON.parse(value);
}

effect(() => {
 localStorage.setItem("current", JSON.stringify(current.value))
});

export const last = signal(getLast());
function getLast() {
  const value = localStorage.getItem("last");
  if (!value) return [];
  return JSON.parse(value);
}

effect(() => {
 localStorage.setItem("last", JSON.stringify(last.value))
});

export const remaining = signal(getRemaining());
function getRemaining() {
  const value = localStorage.getItem("remaining");
  if (!value) return createNumberArray();
  return JSON.parse(value);
}

effect(() => {
 localStorage.setItem("remaining", JSON.stringify(remaining.value))
});

function initTable() {
  let array = [];
  for (let cont = 0; cont > 90; cont ++) {
    array.push(false);
  }
  return array;
}


// Function to create an array with numbers from 1 to 90
function createNumberArray() {
  return Array.from({ length: 90 }, (_, i) => i + 1);
}


// Function to extract a random number and remove it from the array
export function extractNumber() {
  if (remaining.value.length === 0) {
    throw new Error("No more numbers to extract");
}
  const randomIndex = Math.floor(Math.random() * remaining.value.length);
  const extractedNumber = remaining.value[randomIndex];

  // Remove the extracted number from the array
  remaining.value = (remaining.value.filter((number) => number !== extractedNumber));

  current.value = extractedNumber;
  let temparray = last.value;
  temparray.unshift(extractedNumber);
  temparray.pop();
  last.value= temparray;
  table.value[extractedNumber] = true;

  return extractedNumber;
}