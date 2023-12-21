import { effect, signal } from "@preact/signals-react";

const counter = signal(0);

effect(() => {
  console.log(counter.value);

  // Whenever this effect is triggered, increase `effectCount`.
  // But we don't want this signal to react to `effectCount`
  counter.value = counter.peek() + 1;
});

// Read value from signal, logs: 0
console.log(counter.value);

// Write to a signal
counter.value = 1;
